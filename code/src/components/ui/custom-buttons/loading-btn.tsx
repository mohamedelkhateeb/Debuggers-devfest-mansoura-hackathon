'use client';
import { useFormStatus } from 'react-dom';
import { Button } from '../button';

function LoadingButton({ content, style, loader }: { content: string | React.ReactNode; style?: string; loader?: string | React.ReactNode }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className={style} disabled={pending}>
      {pending ? <span>{loader || content}</span> : <span>{content}</span>}
    </Button>
  );
}

export default LoadingButton;
