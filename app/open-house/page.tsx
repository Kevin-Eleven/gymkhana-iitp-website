import { Metadata } from 'next';
import OpenHouseClient from './OpenHouseClient';

export const metadata: Metadata = {
  title: 'Open House | IIT Patna',
  description: 'Open House event information for JEE Advanced qualified candidates',
};

export default function OpenHousePage() {
  return <OpenHouseClient />;
}
