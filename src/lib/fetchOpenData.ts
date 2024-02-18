interface Resource {
  id: string;
  datastore_active: boolean;
}

interface PackageData {
  result: {
    resources: Resource[];
  };
}

// TODO: make this more adaptable for any OpenData TO data
interface DataRecord {
  _id: number;
  BranchCode: string;
  PhysicalBranch: number;
  BranchName: string;
  Address: string;
  PostalCode: string;
  Website: string;
  Telephone: string;
  SquareFootage: string;
  PublicParking: string;
  KidsStop: number;
  LeadingReading: number;
  CLC: number;
  DIH: number;
  TeenCouncil: number;
  YouthHub: number;
  AdultLiteracyProgram: number;
  Workstations: number;
  ServiceTier: string;
  Lat: string;
  Long: string;
  NBHDNo: number;
  NBHDName: string;
  TPLNIA: number;
  WardNo: number;
  WardName: string;
  PresentSiteYear: number;
}

interface DatastoreResourceData {
  result: {
    records: DataRecord[];
  };
}

async function getPackageData(packageId: string): Promise<Resource[]> {
  const response = await fetch(
    `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/package_show?id=${packageId}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch package data');
  }
  const data: PackageData = await response.json();
  return data.result.resources.filter((r) => r.datastore_active);
}

async function getDatastoreResourceData(
  resourceId: string
): Promise<DataRecord[]> {
  const response = await fetch(
    `https://ckan0.cf.opendata.inter.prod-toronto.ca/api/3/action/datastore_search?id=${resourceId}&offset=0&limit=112`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch DatastoreResource data');
  }
  const data: DatastoreResourceData = await response.json();
  return data.result.records.filter((item) => item.PhysicalBranch === 1);
}

export async function fetchOpenData(packageId: string): Promise<DataRecord[]> {
  const datastoreResources = await getPackageData(packageId);

  if (datastoreResources.length === 0) {
    throw new Error('No datastore resources found');
  }

  const data = await getDatastoreResourceData(datastoreResources[0].id);
  return data;
}
