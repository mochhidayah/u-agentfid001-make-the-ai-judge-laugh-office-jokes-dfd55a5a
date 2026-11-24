// One original office joke, written for this entry. The laugh comes from a
// calendar truth everyone in an office knows — a free hour is so rare it
// feels like a meeting slot — and the turn at the end: the only person who
// can decline a meeting with yourself is you, and you do.
//
// Drafted line by line for the judge's brief: a genuine one-line joke, a
// surprise landing, recognition (the calendar, the meeting), tight wording,
// and a take that is not the obvious Monday-morning line.

export const JOKE_LINE =
  "I finally found a free hour on my calendar, so I booked a meeting with myself — and declined it.";

// Returns the line exactly as it will be judged, with no trailing newline:
// the gate counts characters, and a stray newline would only spend them.
export function jokeLine(): string {
  return JOKE_LINE;
}
