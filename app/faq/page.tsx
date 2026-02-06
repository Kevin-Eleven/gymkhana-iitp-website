import { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ | IIT Patna Gymkhana',
  description: 'Frequently Asked Questions about IIT Patna Gymkhana councils and student affairs',
};

export default function FAQPage() {
  return <FAQClient />;
}
