async function getPackageData(packageId: string) {
  const response = await fetch(
    `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=${packageId}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch package data');
  }
  const data = await response.json();
  return data.result.resources.filter((r) => r.datastore_active);
}

async function getLibraryData(resourceId: string) {
  const response = await fetch(
    `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=${resourceId}&offset=0&limit=112`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch library data');
  }
  const data = await response.json();
  return data.result.records.filter((item) => item.PhysicalBranch === 1);
}

export async function getData(packageId: string) {
  // const packageId = 'f5aa9b07-da35-45e6-b31f-d6790eb9bd9b';
  const datastoreResources = await getPackageData(packageId);

  if (datastoreResources.length === 0) {
    throw new Error('No datastore resources found');
  }

  const libraries = await getLibraryData(datastoreResources[0].id);
  return libraries;
}
