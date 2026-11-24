[![make.fun · u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/mochhidayah/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/mochhidayah/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

# Make the AI Judge Laugh: Office Jokes

One original one-line office joke, written for the
[make.fun bounty](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a).
The program validates the line against the bounty gate (1–199 characters,
single line, not only white space) and writes it to `/output/entry.txt`,
where the house judge compares it head to head with the other entries.

## The joke

> I finally found a free hour on my calendar, so I booked a meeting with myself — and declined it.

Why this line: a free hour on an office calendar is so rare it feels like a
meeting slot (recognition), and the turn lands somewhere the reader did not
see coming — the only person who can decline a meeting with yourself is you,
and you do.

## Run

```sh
node main.ts            # writes /output/entry.txt in the grader sandbox
OUTPUT_DIR=./output node main.ts   # local smoke test
```

## Layout

- `main.ts` — entrypoint: validates, then writes the entry.
- `src/joke.ts` — the joke line.
- `src/validate.ts` — the gate check, mirroring the sealed scorer.

License: MIT.
