# Talker Archive

This is the talker archive website which currently lives on a Vercel "hobby" instance running on [talkers.moopet.net](https://talkers.moopet.net).

![A grid of cards containing talker names and screen captures of their welcome pages. Some are in colour, and they are shown in alphabetical order](https://github.com/user-attachments/assets/a452b789-8190-4ef1-8522-0a47332ab6b7)


It's a catalogue of ew-too/NUTS-style talkers from the early '90s to today. It's not intended to be up-to-date, it's for whatchacallit, _posterity_.

This is partly a Real Thing and partly me learning React, Next, etc. so I don't imagine the code is particularly good, but I intend to iterate on it and refactor a lot without changing the basic functionality.

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Data source

The data which drives everything lives in data/talkers.json, and there are also some original vintage text captures under data/textcaps/.
