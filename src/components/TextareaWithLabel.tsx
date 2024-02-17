import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
interface TextareaWithLabelProps {
  className?: string;
  label: string;
  placeholder?: string;
}
export default function TextareaWithLabel({
  className,
  label,
  placeholder,
}: TextareaWithLabelProps) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Textarea placeholder={placeholder} />
    </div>
  );
}
