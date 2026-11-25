export type Theme = "original" | "alternate1" | "alternate2";

export interface Testimonial {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
  theme: Theme;
}
