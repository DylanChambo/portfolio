import { Image } from "sanity";
import { Skill } from "./Skill";
import { SanityBody } from "./SanityBody";

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Skill[];
}