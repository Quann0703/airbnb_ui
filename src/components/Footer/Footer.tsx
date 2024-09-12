"use client";

import ColumFooter from "./ColumFooter";
import SubFooter from "./SubFooter";

const supports = [
  {
    title: "Help Center",
    link: "./",
  },
  {
    title: "Safety information",
    link: "./",
  },
  {
    title: "Cancellation options",
    link: "./",
  },
  {
    title: "Our COVID-19 Response",
    link: "./",
  },
  {
    title: "Supporting people with disabilities",
    link: "./",
  },
  {
    title: "Report a neighborhoood concern",
    link: "./",
  },
];

const community = [
  {
    title: "Airbnb.org: disaster relief housing",
    link: "./",
  },
  {
    title: "Support: Afghan refugees",
    link: "./",
  },
  {
    title: "Celebrating diversity & belonging",
    link: "./",
  },
  {
    title: "Combating discriminatino",
    link: "./",
  },
];

const about = [
  {
    title: "Newsroom",
    link: "./",
  },
  {
    title: "Learn about new features",
    link: "./",
  },
  {
    title: "Letter from our founders",
    link: "./",
  },
  {
    title: "Careers",
    link: "./",
  },
  {
    title: "Investors",
    link: "./",
  },
  {
    title: "Airbnb Luxe",
    link: "./",
  },
];
const hosting = [
  {
    title: "Try hosting",
    link: "./",
  },
  {
    title: "AirCover: protection for Hosts",
    link: "./",
  },
  {
    title: "Explore hosting resources",
    link: "./",
  },
  {
    title: "Visit our community forum",
    link: "./",
  },
  {
    title: "How to host responsibly",
    link: "./",
  },
];
const Footer = () => {
  return (
    <div className="flex flex-col items-start gap-12 self-stretch pt-16 pb-6 px-20 bg-gray-50">
      <div className="flex items-start gap-6 self-stretch">
        <ColumFooter title="Support" rows={supports} />
        <ColumFooter title="Support" rows={community} />
        <ColumFooter title="Support" rows={hosting} />
        <ColumFooter title="Support" rows={about} />
      </div>
      <SubFooter />
    </div>
  );
};

export default Footer;
