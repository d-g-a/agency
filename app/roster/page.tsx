import type { Metadata } from "next";
import { artists } from "@/lib/artists";
import { RosterList } from "@/components/RosterList";

export const metadata: Metadata = { title: "Roster" };

export default function RosterPage() {
  return (
    <>
      <h1 className="page-title">
        Roster<sup>({String(artists.length).padStart(3, "0")})</sup>
      </h1>
      <div style={{ height: "4vw" }} />
      <RosterList artists={artists} />
    </>
  );
}
