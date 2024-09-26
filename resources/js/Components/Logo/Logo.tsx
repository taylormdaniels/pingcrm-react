import React from 'react';
import { Ticket } from 'lucide-react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  //
}

export default function Logo(props: LogoProps) {
  return (
      <Ticket {...props} />
  );
}
