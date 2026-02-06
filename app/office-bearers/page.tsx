import { Metadata } from 'next';
import OfficeBearersClient from './OfficeBearersClient';

export const metadata: Metadata = {
  title: 'Office Bearers | IIT Patna Gymkhana',
  description:
    'Meet the office bearers and student representatives of IIT Patna Gymkhana',
};

export default function OfficeBearersPage() {
  return <section className="min-h-screen bg-[#f4f7fe] pt-12 px-4 pb-14">
    <OfficeBearersClient />
  </section>;
}
