const KEY_ANSWERS=[0,1,2,3,4,5,6,7],WHO_ANSWERS=[
  "D",
  "B",
  "D",
  "A",
  "B",
  "C",
  "A",
  "C"
],EVIDENCE=[
  [
    "D7",
    "D8"
  ],
  [
    "B3",
    "B4"
  ],
  [
    "D2",
    "D3"
  ],
  [
    "A7",
    "A8"
  ],
  [
    "B5",
    "B6",
    "B7"
  ],
  [
    "C5",
    "C7",
    "C8",
    "C10"
  ],
  [
    "A5"
  ],
  [
    "C2",
    "C3"
  ]
],EVIDENCE_RULES=[
  {
    "required": [
      "D7",
      "D8"
    ],
    "allowed": [
      "D7",
      "D8"
    ]
  },
  {
    "required": [
      "B3",
      "B4"
    ],
    "allowed": [
      "B3",
      "B4"
    ]
  },
  {
    "required": [
      "D2",
      "D3"
    ],
    "allowed": [
      "D2",
      "D3"
    ]
  },
  {
    "required": [
      "A7",
      "A8"
    ],
    "allowed": [
      "A7",
      "A8"
    ]
  },
  {
    "required": [
      "B5"
    ],
    "anyOf": [
      [
        "B6",
        "B7"
      ]
    ],
    "allowed": [
      "B5",
      "B6",
      "B7"
    ]
  },
  {
    "required": [
      "C5",
      "C7",
      "C10"
    ],
    "allowed": [
      "C5",
      "C7",
      "C8",
      "C10"
    ]
  },
  {
    "required": [
      "A5"
    ],
    "allowed": [
      "A4",
      "A5"
    ]
  },
  {
    "required": [
      "C2",
      "C3"
    ],
    "allowed": [
      "C1",
      "C2",
      "C3"
    ]
  }
],EXPLANATIONS=[
  "offered me a place on a youth-leadership programme ↔ new chance · the trip will have to wait until next year ↔ changes plan",
  "For several weeks / kept sending / asking ↔ asked again and again · Eventually I agreed ↔ finally joins",
  "found the work difficult / too embarrassed to admit I needed help ↔ past problem · Remembering that / I behaved in the same way → recognise what is happening ↔ knows when others need help",
  "schoolwork has to be my priority ↔ other work comes first · most Saturdays → only twice a month ↔ less time to help",
  "make and edit short videos for fun ↔ hobby skill · use those skills for the organisation / posts encouraging teenagers to join ↔ helps the organisation",
  "I didn’t want to work in the shop ↔ didn't want · only direct animal work was really helping ↔ thought shop work helped little · shop money paid for food, medicine and emergency treatment ↔ finds it useful",
  "making those choices ↔ makes choices · without asking someone else first ↔ no need to ask",
  "feeding dogs / taking them for walks ↔ wanted work · only fifteen / under sixteen ↔ too young"
];function bridgeCorrect(q,ids){const r=EVIDENCE_RULES[q];return !!r&&Array.isArray(ids)&&r.required.every(id=>ids.includes(id))&&(r.anyOf||[]).every(group=>group.some(id=>ids.includes(id)))&&ids.every(id=>r.allowed.includes(id));}module.exports={KEY_ANSWERS,WHO_ANSWERS,EVIDENCE,EVIDENCE_RULES,EXPLANATIONS,bridgeCorrect};
