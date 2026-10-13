import type { Metadata } from "next";
import { artists } from "@/lib/artists";
import { RosterList } from "@/components/RosterList";

export const metadata: Metadata = { title: "Roster" };

export default function RosterPage() {
  return (
    <>
      <h1 className="page-title">
        Roster<sup>{artists.length}</sup>
      </h1>
      <div style={{ height: "48px" }} />
      <RosterList artists={artists} />
    </>
  );
}
