// Frozen public layout snapshot. HTML only displays this data.
window.room2Layout = {
  "version": "v0.3",
  "title": "Giao Ước Máu: Asylum · Room 2 Layout",
  "publicIntro": "Public, read-only measured layout snapshots for Room 2.",
  "disclaimer": "All layouts are Draft concepts, not construction drawings or safety approval. Verify dimensions, egress, accessibility, capacity, fire safety, and local requirements professionally.",
  "statusLegend": {
    "draft": "Draft · not approved"
  },
  "drafts": [
    {
      "id": "c02-i01",
      "name": "T-shape",
      "brief": "Measured 60 m² layout with three playable sub-rooms around one 0.80 m clear T-shaped hallway.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 3,
        "circulation": "T-shaped hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "partitioned",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Upper room",
            "area": 24.701619380113527,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 5.744562646538029,
              "height": 4.300000000000001
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 5.744562646538029,
                "height": 4.300000000000001
              }
            ]
          },
          {
            "id": "Lower-left room",
            "area": 12.204579308003288,
            "bounds": {
              "x": 0,
              "y": 5.3,
              "width": 2.3722813232690143,
              "height": 5.14465935734187
            },
            "rects": [
              {
                "x": 0,
                "y": 5.3,
                "width": 2.3722813232690143,
                "height": 5.14465935734187
              }
            ]
          },
          {
            "id": "Lower-right room",
            "area": 12.204579308003288,
            "bounds": {
              "x": 3.3722813232690143,
              "y": 5.3,
              "width": 2.3722813232690143,
              "height": 5.14465935734187
            },
            "rects": [
              {
                "x": 3.3722813232690143,
                "y": 5.3,
                "width": 2.3722813232690143,
                "height": 5.14465935734187
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 4.4,
            "width": 5.744562646538029,
            "height": 0.8
          },
          {
            "x": 2.4722813232690144,
            "y": 5.2,
            "width": 0.8,
            "height": 5.244659357341869
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0,
            "y": 4.300000000000001,
            "width": 5.744562646538029,
            "height": 0.1
          },
          {
            "x": 0,
            "y": 5.2,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 3.3722813232690143,
            "y": 5.2,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 2.3722813232690143,
            "y": 5.2,
            "width": 0.1,
            "height": 5.244659357341869
          },
          {
            "x": 3.272281323269014,
            "y": 5.2,
            "width": 0.1,
            "height": 5.244659357341869
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.5,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Upper room",
            "area": 24.701619380113527
          },
          {
            "id": "Lower-left room",
            "area": 12.204579308003288
          },
          {
            "id": "Lower-right room",
            "area": 12.204579308003288
          }
        ],
        "combinedRooms": 49.110777996120106,
        "mainHall": 8.791377603103918,
        "subHall": 0,
        "combinedHalls": 8.791377603103918,
        "walls": 2.09784440077598,
        "total": 60,
        "difference": 0
      },
      "assumptions": [
        "The outer portrait boundary is the full 60 m² internal gross game-room shell.",
        "The accepted shell ratio is 0.55, producing a calculated shell of approximately 5.74 × 10.44 m.",
        "The upper, lower-left and lower-right enclosed areas are playable sub-rooms.",
        "One continuous 0.80 m clear hallway forms a horizontal bar and a centred stem to the bottom shell.",
        "All partition walls are continuous in this calculation; player-door and hidden-door openings are not yet placed or subtracted.",
        "One provisional entry is centred at the bottom of the hallway stem; final entry and exit positions remain unresolved.",
        "Partition-wall footprints are included in the 60 m² total."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction."
      ]
    },
    {
      "id": "c02-i02",
      "name": "Upper 0.6 m branch",
      "brief": "Measured independent upper 0.6 m branch iteration.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "subhallwayWidth": 0.6,
        "roomCount": 5,
        "circulation": "T main hallway + right-edge sub-hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "partitioned",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0.6,
        "rooms": [
          {
            "id": "Upper room",
            "area": 14.999999999999998,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 5.044562646538029,
              "height": 2.9734986065232363
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 5.044562646538029,
                "height": 2.9734986065232363
              }
            ]
          },
          {
            "id": "Upper-left small room",
            "area": 3.0322564880560257,
            "bounds": {
              "x": 0,
              "y": 3.0734986065232364,
              "width": 2.472281323269015,
              "height": 1.2265013934767643
            },
            "rects": [
              {
                "x": 0,
                "y": 3.0734986065232364,
                "width": 2.472281323269015,
                "height": 1.2265013934767643
              }
            ]
          },
          {
            "id": "Upper-right small room",
            "area": 3.0322564880560257,
            "bounds": {
              "x": 2.572281323269015,
              "y": 3.0734986065232364,
              "width": 2.472281323269015,
              "height": 1.2265013934767643
            },
            "rects": [
              {
                "x": 2.572281323269015,
                "y": 3.0734986065232364,
                "width": 2.472281323269015,
                "height": 1.2265013934767643
              }
            ]
          },
          {
            "id": "Lower-left room",
            "area": 12.204579308003288,
            "bounds": {
              "x": 0,
              "y": 5.3,
              "width": 2.3722813232690143,
              "height": 5.14465935734187
            },
            "rects": [
              {
                "x": 0,
                "y": 5.3,
                "width": 2.3722813232690143,
                "height": 5.14465935734187
              }
            ]
          },
          {
            "id": "Lower-right room",
            "area": 12.204579308003288,
            "bounds": {
              "x": 3.3722813232690143,
              "y": 5.3,
              "width": 2.3722813232690143,
              "height": 5.14465935734187
            },
            "rects": [
              {
                "x": 3.3722813232690143,
                "y": 5.3,
                "width": 2.3722813232690143,
                "height": 5.14465935734187
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 4.4,
            "width": 5.744562646538029,
            "height": 0.8
          },
          {
            "x": 2.4722813232690144,
            "y": 5.2,
            "width": 0.8,
            "height": 5.244659357341869
          }
        ],
        "subhallRects": [
          {
            "x": 5.144562646538029,
            "y": 0,
            "width": 0.6,
            "height": 4.4
          }
        ],
        "wallsList": [
          {
            "x": 0,
            "y": 4.300000000000001,
            "width": 5.044562646538029,
            "height": 0.1
          },
          {
            "x": 5.044562646538029,
            "y": 0,
            "width": 0.1,
            "height": 4.4
          },
          {
            "x": 0,
            "y": 2.9734986065232363,
            "width": 5.044562646538029,
            "height": 0.1
          },
          {
            "x": 2.472281323269015,
            "y": 3.0734986065232364,
            "width": 0.1,
            "height": 1.2265013934767643
          },
          {
            "x": 0,
            "y": 5.2,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 3.3722813232690143,
            "y": 5.2,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 2.3722813232690143,
            "y": 5.2,
            "width": 0.1,
            "height": 5.244659357341869
          },
          {
            "x": 3.272281323269014,
            "y": 5.2,
            "width": 0.1,
            "height": 5.244659357341869
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.5,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Upper room",
            "area": 14.999999999999998
          },
          {
            "id": "Upper-left small room",
            "area": 3.0322564880560257
          },
          {
            "id": "Upper-right small room",
            "area": 3.0322564880560257
          },
          {
            "id": "Lower-left room",
            "area": 12.204579308003288
          },
          {
            "id": "Lower-right room",
            "area": 12.204579308003288
          }
        ],
        "combinedRooms": 45.47367159211863,
        "mainHall": 8.791377603103918,
        "subHall": 2.64,
        "combinedHalls": 11.431377603103918,
        "walls": 3.0949508047774597,
        "total": 60.00000000000001,
        "difference": -7.105427357601002e-15
      },
      "assumptions": [
        "Internal gross shell is fixed at 60 m² with width/height ratio 0.55.",
        "All partitions are continuous before doors; partition footprints remain inside gross area.",
        "All circulation areas are player-facing; professional access and egress review remains required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "Upper-left small room: 3.03 m²; below the preferred minimum and suitable only for explicitly reviewed limited use.",
        "Upper-right small room: 3.03 m²; below the preferred minimum and suitable only for explicitly reviewed limited use.",
        "Sub-hallway width is a design input; accessibility, capacity, and egress require professional review."
      ]
    },
    {
      "id": "c02-i03",
      "name": "Lower-right split",
      "brief": "Measured independent lower-right split iteration.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "T-shaped hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "partitioned",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Upper room",
            "area": 24.701619380113527,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 5.744562646538029,
              "height": 4.300000000000001
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 5.744562646538029,
                "height": 4.300000000000001
              }
            ]
          },
          {
            "id": "Lower-left room",
            "area": 12.204579308003288,
            "bounds": {
              "x": 0,
              "y": 5.3,
              "width": 2.3722813232690143,
              "height": 5.14465935734187
            },
            "rects": [
              {
                "x": 0,
                "y": 5.3,
                "width": 2.3722813232690143,
                "height": 5.14465935734187
              }
            ]
          },
          {
            "id": "Lower-right upper",
            "area": 5.983675587838193,
            "bounds": {
              "x": 3.3722813232690143,
              "y": 5.3,
              "width": 2.3722813232690143,
              "height": 2.522329678670935
            },
            "rects": [
              {
                "x": 3.3722813232690143,
                "y": 5.3,
                "width": 2.3722813232690143,
                "height": 2.522329678670935
              }
            ]
          },
          {
            "id": "Lower-right lower",
            "area": 5.983675587838193,
            "bounds": {
              "x": 3.3722813232690143,
              "y": 7.922329678670934,
              "width": 2.3722813232690143,
              "height": 2.522329678670935
            },
            "rects": [
              {
                "x": 3.3722813232690143,
                "y": 7.922329678670934,
                "width": 2.3722813232690143,
                "height": 2.522329678670935
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 4.4,
            "width": 5.744562646538029,
            "height": 0.8
          },
          {
            "x": 2.4722813232690144,
            "y": 5.2,
            "width": 0.8,
            "height": 5.244659357341869
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0,
            "y": 4.300000000000001,
            "width": 5.744562646538029,
            "height": 0.1
          },
          {
            "x": 0,
            "y": 5.2,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 3.3722813232690143,
            "y": 5.2,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 2.3722813232690143,
            "y": 5.2,
            "width": 0.1,
            "height": 5.244659357341869
          },
          {
            "x": 3.272281323269014,
            "y": 5.2,
            "width": 0.1,
            "height": 5.244659357341869
          },
          {
            "x": 3.3722813232690143,
            "y": 7.822329678670934,
            "width": 2.3722813232690143,
            "height": 0.1
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.5,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Upper room",
            "area": 24.701619380113527
          },
          {
            "id": "Lower-left room",
            "area": 12.204579308003288
          },
          {
            "id": "Lower-right upper",
            "area": 5.983675587838193
          },
          {
            "id": "Lower-right lower",
            "area": 5.983675587838193
          }
        ],
        "combinedRooms": 48.8735498637932,
        "mainHall": 8.791377603103918,
        "subHall": 0,
        "combinedHalls": 8.791377603103918,
        "walls": 2.335072533102881,
        "total": 60,
        "difference": 0
      },
      "assumptions": [
        "Internal gross shell is fixed at 60 m² with width/height ratio 0.55.",
        "All partitions are continuous before doors; partition footprints remain inside gross area.",
        "All circulation areas are player-facing; professional access and egress review remains required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction."
      ]
    },
    {
      "id": "c02-i04",
      "name": "Short bar",
      "brief": "Measured independent short bar iteration.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Short horizontal hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "partitioned",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Upper-left room",
            "area": 15,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 3.176398307756785,
              "height": 4.722329678670935
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 3.176398307756785,
                "height": 4.722329678670935
              }
            ]
          },
          {
            "id": "Upper-right room",
            "area": 11.655485708863889,
            "bounds": {
              "x": 3.2763983077567853,
              "y": 0,
              "width": 2.4681643387812433,
              "height": 4.722329678670935
            },
            "rects": [
              {
                "x": 3.2763983077567853,
                "y": 0,
                "width": 2.4681643387812433,
                "height": 4.722329678670935
              }
            ]
          },
          {
            "id": "Lower-left room",
            "area": 13.327742854431948,
            "bounds": {
              "x": 0,
              "y": 5.722329678670934,
              "width": 2.8222813232690145,
              "height": 4.722329678670936
            },
            "rects": [
              {
                "x": 0,
                "y": 5.722329678670934,
                "width": 2.8222813232690145,
                "height": 4.722329678670936
              }
            ]
          },
          {
            "id": "Lower-right room",
            "area": 13.327742854431948,
            "bounds": {
              "x": 2.9222813232690146,
              "y": 5.722329678670934,
              "width": 2.8222813232690145,
              "height": 4.722329678670936
            },
            "rects": [
              {
                "x": 2.9222813232690146,
                "y": 5.722329678670934,
                "width": 2.8222813232690145,
                "height": 4.722329678670936
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 4.822329678670934,
            "width": 5.744562646538029,
            "height": 0.8
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0,
            "y": 4.722329678670935,
            "width": 5.744562646538029,
            "height": 0.1
          },
          {
            "x": 0,
            "y": 5.622329678670934,
            "width": 5.744562646538029,
            "height": 0.1
          },
          {
            "x": 3.176398307756785,
            "y": 0,
            "width": 0.1,
            "height": 4.722329678670935
          },
          {
            "x": 2.8222813232690145,
            "y": 5.722329678670934,
            "width": 0.1,
            "height": 4.722329678670936
          }
        ],
        "entry": {
          "side": "left",
          "position": 0.5,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Upper-left room",
            "area": 15
          },
          {
            "id": "Upper-right room",
            "area": 11.655485708863889
          },
          {
            "id": "Lower-left room",
            "area": 13.327742854431948
          },
          {
            "id": "Lower-right room",
            "area": 13.327742854431948
          }
        ],
        "combinedRooms": 53.310971417727785,
        "mainHall": 4.595650117230423,
        "subHall": 0,
        "combinedHalls": 4.595650117230423,
        "walls": 2.093378465041793,
        "total": 60,
        "difference": 0
      },
      "assumptions": [
        "Internal gross shell is fixed at 60 m² with width/height ratio 0.55.",
        "All partitions are continuous before doors; partition footprints remain inside gross area.",
        "All circulation areas are player-facing; professional access and egress review remains required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction."
      ]
    },
    {
      "id": "c02-i05",
      "name": "Edge spine",
      "brief": "Measured independent edge spine iteration.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Long edge hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "partitioned",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 15,
            "bounds": {
              "x": 0.9,
              "y": 0,
              "width": 4.844562646538028,
              "height": 3.0962547281165094
            },
            "rects": [
              {
                "x": 0.9,
                "y": 0,
                "width": 4.844562646538028,
                "height": 3.0962547281165094
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 11.382145928143633,
            "bounds": {
              "x": 0.9,
              "y": 3.1962547281165095,
              "width": 4.844562646538028,
              "height": 2.3494682097417865
            },
            "rects": [
              {
                "x": 0.9,
                "y": 3.1962547281165095,
                "width": 4.844562646538028,
                "height": 2.3494682097417865
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 11.382145928143633,
            "bounds": {
              "x": 0.9,
              "y": 5.645722937858296,
              "width": 4.844562646538028,
              "height": 2.3494682097417865
            },
            "rects": [
              {
                "x": 0.9,
                "y": 5.645722937858296,
                "width": 4.844562646538028,
                "height": 2.3494682097417865
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 11.382145928143633,
            "bounds": {
              "x": 0.9,
              "y": 8.095191147600083,
              "width": 4.844562646538028,
              "height": 2.3494682097417865
            },
            "rects": [
              {
                "x": 0.9,
                "y": 8.095191147600083,
                "width": 4.844562646538028,
                "height": 2.3494682097417865
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 0.8,
            "height": 10.44465935734187
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.8,
            "y": 0,
            "width": 0.1,
            "height": 10.44465935734187
          },
          {
            "x": 0.9,
            "y": 3.0962547281165094,
            "width": 4.844562646538028,
            "height": 0.1
          },
          {
            "x": 0.9,
            "y": 5.5457229378582955,
            "width": 4.844562646538028,
            "height": 0.1
          },
          {
            "x": 0.9,
            "y": 7.9951911476000825,
            "width": 4.844562646538028,
            "height": 0.1
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227915,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 15
          },
          {
            "id": "Room 2",
            "area": 11.382145928143633
          },
          {
            "id": "Room 3",
            "area": 11.382145928143633
          },
          {
            "id": "Room 4",
            "area": 11.382145928143633
          }
        ],
        "combinedRooms": 49.1464377844309,
        "mainHall": 8.355727485873496,
        "subHall": 0,
        "combinedHalls": 8.355727485873496,
        "walls": 2.4978347296955956,
        "total": 59.99999999999999,
        "difference": 7.105427357601002e-15
      },
      "assumptions": [
        "Internal gross shell is fixed at 60 m² with width/height ratio 0.55.",
        "All partitions are continuous before doors; partition footprints remain inside gross area.",
        "All circulation areas are player-facing; professional access and egress review remains required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction."
      ]
    },
    {
      "id": "c02-i06",
      "name": "Long spine",
      "brief": "Measured independent long spine iteration.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Long central hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "partitioned",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Left upper room",
            "area": 15,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 2.3722813232690143,
              "height": 6.323027481129402
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 2.3722813232690143,
                "height": 6.323027481129402
              }
            ]
          },
          {
            "id": "Left lower room",
            "area": 9.540442189002162,
            "bounds": {
              "x": 0,
              "y": 6.4230274811294015,
              "width": 2.3722813232690143,
              "height": 4.021631876212468
            },
            "rects": [
              {
                "x": 0,
                "y": 6.4230274811294015,
                "width": 2.3722813232690143,
                "height": 4.021631876212468
              }
            ]
          },
          {
            "id": "Right upper room",
            "area": 12.270221094501082,
            "bounds": {
              "x": 3.3722813232690148,
              "y": 0,
              "width": 2.3722813232690143,
              "height": 5.172329678670935
            },
            "rects": [
              {
                "x": 3.3722813232690148,
                "y": 0,
                "width": 2.3722813232690143,
                "height": 5.172329678670935
              }
            ]
          },
          {
            "id": "Right lower room",
            "area": 12.270221094501082,
            "bounds": {
              "x": 3.3722813232690148,
              "y": 5.272329678670935,
              "width": 2.3722813232690143,
              "height": 5.172329678670935
            },
            "rects": [
              {
                "x": 3.3722813232690148,
                "y": 5.272329678670935,
                "width": 2.3722813232690143,
                "height": 5.172329678670935
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 2.4722813232690144,
            "y": 0,
            "width": 0.8,
            "height": 10.44465935734187
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 2.3722813232690143,
            "y": 0,
            "width": 0.1,
            "height": 10.44465935734187
          },
          {
            "x": 3.2722813232690147,
            "y": 0,
            "width": 0.1,
            "height": 10.44465935734187
          },
          {
            "x": 0,
            "y": 6.323027481129402,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 3.3722813232690148,
            "y": 5.172329678670935,
            "width": 2.3722813232690143,
            "height": 0.1
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.5,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Left upper room",
            "area": 15
          },
          {
            "id": "Left lower room",
            "area": 9.540442189002162
          },
          {
            "id": "Right upper room",
            "area": 12.270221094501082
          },
          {
            "id": "Right lower room",
            "area": 12.270221094501082
          }
        ],
        "combinedRooms": 49.08088437800433,
        "mainHall": 8.355727485873496,
        "subHall": 0,
        "combinedHalls": 8.355727485873496,
        "walls": 2.563388136122177,
        "total": 60,
        "difference": 0
      },
      "assumptions": [
        "Internal gross shell is fixed at 60 m² with width/height ratio 0.55.",
        "All partitions are continuous before doors; partition footprints remain inside gross area.",
        "All circulation areas are player-facing; professional access and egress review remains required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction."
      ]
    },
    {
      "id": "c02-i07",
      "name": "O-loop",
      "brief": "Measured independent o-loop iteration.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 3,
        "circulation": "O-shaped hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "partitioned",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Central upper room",
            "area": 15,
            "bounds": {
              "x": 0.9,
              "y": 0.9,
              "width": 3.944562646538029,
              "height": 3.8027029468437643
            },
            "rects": [
              {
                "x": 0.9,
                "y": 0.9,
                "width": 3.944562646538029,
                "height": 3.8027029468437643
              }
            ]
          },
          {
            "id": "Central middle room",
            "area": 9.155243931854285,
            "bounds": {
              "x": 0.9,
              "y": 4.802702946843764,
              "width": 3.944562646538029,
              "height": 2.320978205249052
            },
            "rects": [
              {
                "x": 0.9,
                "y": 4.802702946843764,
                "width": 3.944562646538029,
                "height": 2.320978205249052
              }
            ]
          },
          {
            "id": "Central lower room",
            "area": 9.155243931854285,
            "bounds": {
              "x": 0.9,
              "y": 7.223681152092816,
              "width": 3.944562646538029,
              "height": 2.320978205249052
            },
            "rects": [
              {
                "x": 0.9,
                "y": 7.223681152092816,
                "width": 3.944562646538029,
                "height": 2.320978205249052
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 5.744562646538029,
            "height": 0.8
          },
          {
            "x": 0,
            "y": 9.644659357341869,
            "width": 5.744562646538029,
            "height": 0.8
          },
          {
            "x": 0,
            "y": 0.8,
            "width": 0.8,
            "height": 8.84465935734187
          },
          {
            "x": 4.944562646538029,
            "y": 0.8,
            "width": 0.8,
            "height": 8.84465935734187
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.8,
            "y": 0.8,
            "width": 4.144562646538029,
            "height": 0.1
          },
          {
            "x": 0.8,
            "y": 9.54465935734187,
            "width": 4.144562646538029,
            "height": 0.1
          },
          {
            "x": 0.8,
            "y": 0.9,
            "width": 0.1,
            "height": 8.644659357341869
          },
          {
            "x": 4.844562646538029,
            "y": 0.9,
            "width": 0.1,
            "height": 8.644659357341869
          },
          {
            "x": 0.9,
            "y": 4.702702946843765,
            "width": 3.944562646538029,
            "height": 0.1
          },
          {
            "x": 0.9,
            "y": 7.123681152092816,
            "width": 3.944562646538029,
            "height": 0.1
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.5,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Central upper room",
            "area": 15
          },
          {
            "id": "Central middle room",
            "area": 9.155243931854285
          },
          {
            "id": "Central lower room",
            "area": 9.155243931854285
          }
        ],
        "combinedRooms": 33.31048786370857,
        "mainHall": 23.342755206207833,
        "subHall": 0,
        "combinedHalls": 23.342755206207833,
        "walls": 3.3467569300835853,
        "total": 59.99999999999999,
        "difference": 7.105427357601002e-15
      },
      "assumptions": [
        "Internal gross shell is fixed at 60 m² with width/height ratio 0.55.",
        "All partitions are continuous before doors; partition footprints remain inside gross area.",
        "All circulation areas are player-facing; professional access and egress review remains required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "High hallway-area share; review the circulation trade-off."
      ]
    },
    {
      "id": "c02-i08",
      "name": "T + upper O-loop",
      "brief": "Measured independent t + upper o-loop iteration.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "subhallwayWidth": 0.6,
        "roomCount": 3,
        "circulation": "T-shaped main hallway + upper O-shaped sub-hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "partitioned",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0.6,
        "rooms": [
          {
            "id": "Upper 15 m² room",
            "area": 15,
            "bounds": {
              "x": 0.7,
              "y": 0.7,
              "width": 4.344562646538028,
              "height": 3.4525914851182486
            },
            "rects": [
              {
                "x": 0.7,
                "y": 0.7,
                "width": 4.344562646538028,
                "height": 3.4525914851182486
              }
            ]
          },
          {
            "id": "Lower-left room",
            "area": 11.130904980786683,
            "bounds": {
              "x": 0,
              "y": 5.752591485118248,
              "width": 2.3722813232690143,
              "height": 4.692067872223622
            },
            "rects": [
              {
                "x": 0,
                "y": 5.752591485118248,
                "width": 2.3722813232690143,
                "height": 4.692067872223622
              }
            ]
          },
          {
            "id": "Lower-right room",
            "area": 11.130904980786683,
            "bounds": {
              "x": 3.3722813232690143,
              "y": 5.752591485118248,
              "width": 2.3722813232690143,
              "height": 4.692067872223622
            },
            "rects": [
              {
                "x": 3.3722813232690143,
                "y": 5.752591485118248,
                "width": 2.3722813232690143,
                "height": 4.692067872223622
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 4.852591485118248,
            "width": 5.744562646538029,
            "height": 0.8
          },
          {
            "x": 2.4722813232690144,
            "y": 5.652591485118248,
            "width": 0.8,
            "height": 4.792067872223622
          }
        ],
        "subhallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 5.744562646538029,
            "height": 0.6
          },
          {
            "x": 0,
            "y": 4.2525914851182485,
            "width": 5.744562646538029,
            "height": 0.6
          },
          {
            "x": 0,
            "y": 0.6,
            "width": 0.6,
            "height": 3.652591485118248
          },
          {
            "x": 5.144562646538029,
            "y": 0.6,
            "width": 0.6,
            "height": 3.652591485118248
          }
        ],
        "wallsList": [
          {
            "x": 0.6,
            "y": 0.6,
            "width": 4.544562646538028,
            "height": 0.1
          },
          {
            "x": 0.6,
            "y": 4.152591485118249,
            "width": 4.544562646538028,
            "height": 0.1
          },
          {
            "x": 0.6,
            "y": 0.7,
            "width": 0.1,
            "height": 3.4525914851182486
          },
          {
            "x": 5.044562646538029,
            "y": 0.7,
            "width": 0.1,
            "height": 3.4525914851182486
          },
          {
            "x": 0,
            "y": 5.652591485118248,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 3.3722813232690143,
            "y": 5.652591485118248,
            "width": 2.3722813232690143,
            "height": 0.1
          },
          {
            "x": 2.3722813232690143,
            "y": 5.652591485118248,
            "width": 0.1,
            "height": 4.792067872223622
          },
          {
            "x": 3.272281323269014,
            "y": 5.652591485118248,
            "width": 0.1,
            "height": 4.792067872223622
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.5,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Upper 15 m² room",
            "area": 15
          },
          {
            "id": "Lower-left room",
            "area": 11.130904980786683
          },
          {
            "id": "Lower-right room",
            "area": 11.130904980786683
          }
        ],
        "combinedRooms": 37.26180996157336,
        "mainHall": 8.42930441500932,
        "subHall": 11.276584957987533,
        "combinedHalls": 19.70588937299685,
        "walls": 3.0323006654297826,
        "total": 59.99999999999999,
        "difference": 7.105427357601002e-15
      },
      "assumptions": [
        "Internal gross shell is fixed at 60 m² with width/height ratio 0.55.",
        "All partitions are continuous before doors; partition footprints remain inside gross area.",
        "All circulation areas are player-facing; professional access and egress review remains required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "Sub-hallway width is a design input; accessibility, capacity, and egress require professional review."
      ]
    },
    {
      "id": "g01-i001",
      "name": "Zig-zag · centre · 0 branches · 4 rooms",
      "brief": "Generated zig-zag layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated zig-zag hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 4.619999999999975,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 1.4000000000000001,
              "height": 3.3000000000000016
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 1.4000000000000001,
                "height": 3.3000000000000016
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 12.53172576199755,
            "bounds": {
              "x": 2.400000000000001,
              "y": 0,
              "width": 3.344562646538028,
              "height": 5.1999999999999975
            },
            "rects": [
              {
                "x": 2.400000000000001,
                "y": 0,
                "width": 3.344562646538028,
                "height": 2.700000000000001
              },
              {
                "x": 4.000000000000002,
                "y": 2.700000000000001,
                "width": 1.7445626465380268,
                "height": 0.10000000000000009
              },
              {
                "x": 4.100000000000001,
                "y": 2.800000000000001,
                "width": 1.6445626465380272,
                "height": 0.30000000000000027
              },
              {
                "x": 4.5,
                "y": 3.1000000000000014,
                "width": 1.2445626465380286,
                "height": 2.099999999999996
              },
              {
                "x": 4.4,
                "y": 5.099999999999998,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.999999999999998,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.899999999999999,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.799999999999999,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.699999999999999,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.6,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.5,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.4,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.300000000000001,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.200000000000001,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.100000000000001,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 4.000000000000002,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 3.900000000000002,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              },
              {
                "x": 4.4,
                "y": 3.800000000000002,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              },
              {
                "x": 4.4,
                "y": 3.700000000000002,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              },
              {
                "x": 4.4,
                "y": 3.600000000000002,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              },
              {
                "x": 4.4,
                "y": 3.5000000000000018,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              },
              {
                "x": 4.4,
                "y": 3.4000000000000017,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              },
              {
                "x": 4.4,
                "y": 3.3000000000000016,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              },
              {
                "x": 4.4,
                "y": 3.2000000000000015,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              },
              {
                "x": 4.4,
                "y": 3.1000000000000014,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              },
              {
                "x": 4.300000000000001,
                "y": 3.1000000000000014,
                "width": 0.09999999999999964,
                "height": 0.10000000000000009
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 19.817182457620834,
            "bounds": {
              "x": 0,
              "y": 3.4000000000000017,
              "width": 3.4000000000000017,
              "height": 7.044659357341867
            },
            "rects": [
              {
                "x": 0,
                "y": 3.4000000000000017,
                "width": 1.8000000000000005,
                "height": 7.044659357341867
              },
              {
                "x": 1.8000000000000005,
                "y": 10.399999999999979,
                "width": 0.6000000000000003,
                "height": 0.044659357341890527
              },
              {
                "x": 1.8000000000000005,
                "y": 10.29999999999998,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 10.19999999999998,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 10.09999999999998,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.99999999999998,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.89999999999998,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.799999999999981,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.699999999999982,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.599999999999982,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.499999999999982,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.399999999999983,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.299999999999983,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.199999999999983,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 9.099999999999984,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.999999999999984,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.899999999999984,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.799999999999985,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.699999999999985,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.599999999999985,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.499999999999986,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.399999999999986,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.299999999999986,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.199999999999987,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 8.099999999999987,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.999999999999988,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.899999999999988,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.799999999999988,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.699999999999989,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.599999999999989,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.499999999999989,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.39999999999999,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.29999999999999,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.19999999999999,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 7.099999999999991,
                "width": 0.6000000000000003,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.999999999999991,
                "width": 0.7000000000000004,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.8999999999999915,
                "width": 1.0000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.799999999999992,
                "width": 1.0000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.699999999999992,
                "width": 1.0000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.5999999999999925,
                "width": 1.1000000000000008,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.499999999999993,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.399999999999993,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.299999999999994,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.199999999999994,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 6.099999999999994,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.999999999999995,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.899999999999995,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.799999999999995,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.699999999999996,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.599999999999996,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.4999999999999964,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.399999999999997,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.299999999999997,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.1999999999999975,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 5.099999999999998,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.999999999999998,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.899999999999999,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.799999999999999,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.699999999999999,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.6,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.5,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.4,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.300000000000001,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.200000000000001,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.100000000000001,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 4.000000000000002,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 3.900000000000002,
                "width": 1.6000000000000012,
                "height": 0.09999999999999964
              },
              {
                "x": 1.8000000000000005,
                "y": 3.800000000000002,
                "width": 1.6000000000000012,
                "height": 0.10000000000000009
              },
              {
                "x": 1.8000000000000005,
                "y": 3.700000000000002,
                "width": 1.6000000000000012,
                "height": 0.10000000000000009
              },
              {
                "x": 1.8000000000000005,
                "y": 3.600000000000002,
                "width": 0.10000000000000009,
                "height": 0.10000000000000009
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 9.871976158385982,
            "bounds": {
              "x": 3.4000000000000017,
              "y": 5.299999999999997,
              "width": 2.344562646538027,
              "height": 5.144659357341872
            },
            "rects": [
              {
                "x": 4.4,
                "y": 5.299999999999997,
                "width": 1.3445626465380283,
                "height": 5.144659357341872
              },
              {
                "x": 4.300000000000001,
                "y": 10.399999999999979,
                "width": 0.09999999999999964,
                "height": 0.044659357341890527
              },
              {
                "x": 4.200000000000001,
                "y": 10.399999999999979,
                "width": 0.09999999999999964,
                "height": 0.044659357341890527
              },
              {
                "x": 4.200000000000001,
                "y": 10.29999999999998,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 10.19999999999998,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 10.09999999999998,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.99999999999998,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.89999999999998,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.799999999999981,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.699999999999982,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.599999999999982,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.499999999999982,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.399999999999983,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.299999999999983,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.199999999999983,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 9.099999999999984,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.999999999999984,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.899999999999984,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.799999999999985,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.699999999999985,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.599999999999985,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.499999999999986,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.399999999999986,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.299999999999986,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.199999999999987,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 8.099999999999987,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 7.999999999999988,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 7.899999999999988,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 7.799999999999988,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 7.699999999999989,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 7.599999999999989,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 7.499999999999989,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 7.39999999999999,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.200000000000001,
                "y": 7.29999999999999,
                "width": 0.1999999999999993,
                "height": 0.09999999999999964
              },
              {
                "x": 4.100000000000001,
                "y": 7.29999999999999,
                "width": 0.09999999999999964,
                "height": 3.1446593573418795
              },
              {
                "x": 4.000000000000002,
                "y": 7.499999999999989,
                "width": 0.09999999999999964,
                "height": 2.9446593573418802
              },
              {
                "x": 3.900000000000002,
                "y": 10.399999999999979,
                "width": 0.09999999999999964,
                "height": 0.044659357341890527
              },
              {
                "x": 3.800000000000002,
                "y": 10.399999999999979,
                "width": 0.10000000000000009,
                "height": 0.044659357341890527
              },
              {
                "x": 3.800000000000002,
                "y": 10.29999999999998,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 10.19999999999998,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 10.09999999999998,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.99999999999998,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.89999999999998,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.799999999999981,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.699999999999982,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.599999999999982,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.499999999999982,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.399999999999983,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.299999999999983,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.199999999999983,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 9.099999999999984,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.999999999999984,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.899999999999984,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.799999999999985,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.699999999999985,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.599999999999985,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.499999999999986,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.399999999999986,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.299999999999986,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.199999999999987,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 8.099999999999987,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 7.999999999999988,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 7.899999999999988,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 7.799999999999988,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 7.699999999999989,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.800000000000002,
                "y": 7.599999999999989,
                "width": 0.19999999999999973,
                "height": 0.09999999999999964
              },
              {
                "x": 3.700000000000002,
                "y": 7.599999999999989,
                "width": 0.10000000000000009,
                "height": 2.8446593573418806
              },
              {
                "x": 3.600000000000002,
                "y": 7.599999999999989,
                "width": 0.10000000000000009,
                "height": 2.8446593573418806
              },
              {
                "x": 3.5000000000000018,
                "y": 10.399999999999979,
                "width": 0.10000000000000009,
                "height": 0.044659357341890527
              },
              {
                "x": 3.4000000000000017,
                "y": 10.399999999999979,
                "width": 0.10000000000000009,
                "height": 0.044659357341890527
              },
              {
                "x": 3.4000000000000017,
                "y": 10.29999999999998,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 10.19999999999998,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 10.09999999999998,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.99999999999998,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.89999999999998,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.799999999999981,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.699999999999982,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.599999999999982,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.499999999999982,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.399999999999983,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.299999999999983,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.199999999999983,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 9.099999999999984,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.999999999999984,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.899999999999984,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.799999999999985,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.699999999999985,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.599999999999985,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.499999999999986,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.399999999999986,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.299999999999986,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.199999999999987,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 8.099999999999987,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 7.999999999999988,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 7.899999999999988,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 7.799999999999988,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 7.699999999999989,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 3.4000000000000017,
                "y": 7.599999999999989,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 4.300000000000001,
                "y": 7.19999999999999,
                "width": 0.09999999999999964,
                "height": 0.09999999999999964
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 2.500000000000001,
            "y": 7.099999999999991,
            "width": 1.7999999999999998,
            "height": 0.09999999999999964
          },
          {
            "x": 2.500000000000001,
            "y": 7.19999999999999,
            "width": 1.5000000000000009,
            "height": 0.29999999999999893
          },
          {
            "x": 2.500000000000001,
            "y": 7.499999999999989,
            "width": 0.8000000000000007,
            "height": 2.9446593573418802
          },
          {
            "x": 2.9000000000000012,
            "y": 6.699999999999992,
            "width": 1.3999999999999995,
            "height": 0.3999999999999986
          },
          {
            "x": 3.5000000000000018,
            "y": 3.2000000000000015,
            "width": 0.7999999999999989,
            "height": 3.4999999999999907
          },
          {
            "x": 1.9000000000000006,
            "y": 2.800000000000001,
            "width": 2.1000000000000014,
            "height": 0.40000000000000036
          },
          {
            "x": 1.9000000000000006,
            "y": 3.2000000000000015,
            "width": 1.6000000000000012,
            "height": 0.40000000000000036
          },
          {
            "x": 1.5000000000000002,
            "y": 0,
            "width": 0.8000000000000005,
            "height": 2.800000000000001
          },
          {
            "x": 1.5000000000000002,
            "y": 2.800000000000001,
            "width": 0.40000000000000036,
            "height": 0.5000000000000004
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 2.400000000000001,
            "y": 7.099999999999991,
            "width": 0.10000000000000009,
            "height": 3.344659357341879
          },
          {
            "x": 2.500000000000001,
            "y": 6.999999999999991,
            "width": 0.40000000000000036,
            "height": 0.09999999999999964
          },
          {
            "x": 3.3000000000000016,
            "y": 7.499999999999989,
            "width": 0.7000000000000002,
            "height": 0.09999999999999964
          },
          {
            "x": 3.3000000000000016,
            "y": 7.599999999999989,
            "width": 0.10000000000000009,
            "height": 2.8446593573418806
          },
          {
            "x": 2.800000000000001,
            "y": 6.699999999999992,
            "width": 0.10000000000000009,
            "height": 0.29999999999999893
          },
          {
            "x": 2.9000000000000012,
            "y": 6.5999999999999925,
            "width": 0.6000000000000005,
            "height": 0.09999999999999964
          },
          {
            "x": 4.000000000000002,
            "y": 7.19999999999999,
            "width": 0.29999999999999893,
            "height": 0.09999999999999964
          },
          {
            "x": 4.000000000000002,
            "y": 7.29999999999999,
            "width": 0.09999999999999964,
            "height": 0.1999999999999993
          },
          {
            "x": 4.000000000000002,
            "y": 3.1000000000000014,
            "width": 0.29999999999999893,
            "height": 0.10000000000000009
          },
          {
            "x": 4.300000000000001,
            "y": 3.2000000000000015,
            "width": 0.09999999999999964,
            "height": 3.999999999999989
          },
          {
            "x": 3.4000000000000017,
            "y": 3.600000000000002,
            "width": 0.10000000000000009,
            "height": 2.9999999999999907
          },
          {
            "x": 2.3000000000000007,
            "y": 2.700000000000001,
            "width": 1.700000000000001,
            "height": 0.10000000000000009
          },
          {
            "x": 4.000000000000002,
            "y": 2.800000000000001,
            "width": 0.09999999999999964,
            "height": 0.30000000000000027
          },
          {
            "x": 1.8000000000000005,
            "y": 3.3000000000000016,
            "width": 0.10000000000000009,
            "height": 0.30000000000000027
          },
          {
            "x": 1.9000000000000006,
            "y": 3.600000000000002,
            "width": 1.500000000000001,
            "height": 0.10000000000000009
          },
          {
            "x": 1.4000000000000001,
            "y": 0,
            "width": 0.10000000000000009,
            "height": 3.4000000000000017
          },
          {
            "x": 2.3000000000000007,
            "y": 0,
            "width": 0.10000000000000009,
            "height": 2.700000000000001
          },
          {
            "x": 1.5000000000000002,
            "y": 3.3000000000000016,
            "width": 0.30000000000000027,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 3.3000000000000016,
            "width": 1.4000000000000001,
            "height": 0.10000000000000009
          },
          {
            "x": 4.5,
            "y": 5.1999999999999975,
            "width": 1.2445626465380286,
            "height": 0.09999999999999964
          },
          {
            "x": 4.4,
            "y": 5.1999999999999975,
            "width": 0.09999999999999964,
            "height": 0.09999999999999964
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.5048252022715239,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 4.619999999999975
          },
          {
            "id": "Room 2",
            "area": 12.53172576199755
          },
          {
            "id": "Room 3",
            "area": 19.817182457620834
          },
          {
            "id": "Room 4",
            "area": 9.871976158385982
          }
        ],
        "combinedRooms": 46.84088437800434,
        "mainHall": 10.265727485873349,
        "subHall": 0,
        "combinedHalls": 10.265727485873349,
        "walls": 2.8933881361221827,
        "total": 59.99999999999987,
        "difference": 1.2789769243681803e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer.",
        "Room 1: 4.62 m²; non-walk-in locked-box/table space only.",
        "Room 1: 4.62 m²; below the preferred minimum and suitable only for explicitly reviewed limited use."
      ]
    },
    {
      "id": "g01-i002",
      "name": "Tree · left · 2 branches · 4 rooms",
      "brief": "Generated tree layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated tree hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 9.689125293075923,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 0,
              "width": 4.844562646538028,
              "height": 2.0000000000000004
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 0,
                "width": 4.844562646538028,
                "height": 2.0000000000000004
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 15.502600468921454,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 3.0000000000000013,
              "width": 4.844562646538028,
              "height": 3.1999999999999926
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 3.0000000000000013,
                "width": 4.844562646538028,
                "height": 3.1999999999999926
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 4.866989036012774,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 7.19999999999999,
              "width": 1.5000000000000009,
              "height": 3.244659357341879
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 7.19999999999999,
                "width": 1.5000000000000009,
                "height": 3.244659357341879
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 10.527500551571416,
            "bounds": {
              "x": 2.500000000000001,
              "y": 7.19999999999999,
              "width": 3.2445626465380277,
              "height": 3.244659357341879
            },
            "rects": [
              {
                "x": 2.500000000000001,
                "y": 7.19999999999999,
                "width": 3.2445626465380277,
                "height": 3.244659357341879
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 0.7999999999999999,
            "height": 10.44465935734187
          },
          {
            "x": 0.7999999999999999,
            "y": 2.1000000000000005,
            "width": 4.944562646538029,
            "height": 0.8000000000000007
          },
          {
            "x": 0.7999999999999999,
            "y": 6.299999999999994,
            "width": 4.944562646538029,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.7999999999999999,
            "y": 0,
            "width": 0.09999999999999998,
            "height": 2.1000000000000005
          },
          {
            "x": 0.7999999999999999,
            "y": 2.9000000000000012,
            "width": 4.944562646538029,
            "height": 0.10000000000000009
          },
          {
            "x": 0.7999999999999999,
            "y": 3.0000000000000013,
            "width": 0.09999999999999998,
            "height": 3.2999999999999923
          },
          {
            "x": 0.7999999999999999,
            "y": 7.099999999999991,
            "width": 4.944562646538029,
            "height": 0.09999999999999964
          },
          {
            "x": 0.7999999999999999,
            "y": 7.19999999999999,
            "width": 0.09999999999999998,
            "height": 3.244659357341879
          },
          {
            "x": 0.8999999999999999,
            "y": 2.0000000000000004,
            "width": 4.844562646538028,
            "height": 0.10000000000000009
          },
          {
            "x": 0.8999999999999999,
            "y": 6.199999999999994,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 2.400000000000001,
            "y": 7.19999999999999,
            "width": 0.10000000000000009,
            "height": 3.244659357341879
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227913,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 9.689125293075923
          },
          {
            "id": "Room 2",
            "area": 15.502600468921454
          },
          {
            "id": "Room 3",
            "area": 4.866989036012774
          },
          {
            "id": "Room 4",
            "area": 10.527500551571416
          }
        ],
        "combinedRooms": 40.586215349581565,
        "mainHall": 16.26702772033413,
        "subHall": 0,
        "combinedHalls": 16.26702772033413,
        "walls": 3.1467569300835674,
        "total": 59.99999999999926,
        "difference": 7.389644451905042e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer.",
        "Room 3: 4.87 m²; non-walk-in locked-box/table space only.",
        "Room 3: 4.87 m²; below the preferred minimum and suitable only for explicitly reviewed limited use."
      ]
    },
    {
      "id": "g01-i003",
      "name": "Branching · left · 1 branch · 4 rooms",
      "brief": "Generated branching layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated branching hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 8.842494087037341,
            "bounds": {
              "x": 1.9000000000000006,
              "y": 0,
              "width": 3.8445626465380283,
              "height": 2.3000000000000007
            },
            "rects": [
              {
                "x": 1.9000000000000006,
                "y": 0,
                "width": 3.8445626465380283,
                "height": 2.3000000000000007
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 8.458037822383542,
            "bounds": {
              "x": 1.9000000000000006,
              "y": 2.400000000000001,
              "width": 3.8445626465380283,
              "height": 2.199999999999999
            },
            "rects": [
              {
                "x": 1.9000000000000006,
                "y": 2.400000000000001,
                "width": 3.8445626465380283,
                "height": 2.199999999999999
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 7.06684396980694,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 5.599999999999996,
              "width": 4.844562646538028,
              "height": 1.4999999999999947
            },
            "rects": [
              {
                "x": 1.6000000000000003,
                "y": 5.599999999999996,
                "width": 4.144562646538028,
                "height": 1.4999999999999947
              },
              {
                "x": 1.5000000000000002,
                "y": 6.999999999999991,
                "width": 0.10000000000000009,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.999999999999991,
                "width": 0.10000000000000009,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.8999999999999915,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.799999999999992,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.699999999999992,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.5999999999999925,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.499999999999993,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.399999999999993,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.299999999999994,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.199999999999994,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 6.099999999999994,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 5.999999999999995,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.4000000000000001,
                "y": 5.899999999999995,
                "width": 0.20000000000000018,
                "height": 0.09999999999999964
              },
              {
                "x": 1.3,
                "y": 5.899999999999995,
                "width": 0.10000000000000009,
                "height": 1.1999999999999957
              },
              {
                "x": 1.2,
                "y": 5.899999999999995,
                "width": 0.10000000000000009,
                "height": 1.1999999999999957
              },
              {
                "x": 1.0999999999999999,
                "y": 6.999999999999991,
                "width": 0.10000000000000009,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.999999999999991,
                "width": 0.09999999999999998,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.8999999999999915,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.799999999999992,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.699999999999992,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.5999999999999925,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.499999999999993,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.399999999999993,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.299999999999994,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.199999999999994,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 6.099999999999994,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 5.999999999999995,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.9999999999999999,
                "y": 5.899999999999995,
                "width": 0.20000000000000007,
                "height": 0.09999999999999964
              },
              {
                "x": 0.8999999999999999,
                "y": 5.899999999999995,
                "width": 0.09999999999999998,
                "height": 1.1999999999999957
              },
              {
                "x": 1.5000000000000002,
                "y": 5.799999999999995,
                "width": 0.10000000000000009,
                "height": 0.09999999999999964
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 15.71895552331835,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 7.19999999999999,
              "width": 4.844562646538028,
              "height": 3.244659357341879
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 7.19999999999999,
                "width": 4.844562646538028,
                "height": 3.244659357341879
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 5.399999999999997,
            "width": 5.744562646538029,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 5.4999999999999964,
            "width": 1.5000000000000002,
            "height": 0.29999999999999893
          },
          {
            "x": 0,
            "y": 5.799999999999995,
            "width": 0.7999999999999999,
            "height": 4.644659357341874
          },
          {
            "x": 0.4,
            "y": 4.999999999999998,
            "width": 5.344562646538028,
            "height": 0.3999999999999986
          },
          {
            "x": 0,
            "y": 0,
            "width": 0.7999999999999999,
            "height": 4.999999999999998
          },
          {
            "x": 0,
            "y": 4.999999999999998,
            "width": 0.4,
            "height": 0.3999999999999986
          },
          {
            "x": 0.9999999999999999,
            "y": 0,
            "width": 0.8000000000000006,
            "height": 4.999999999999998
          },
          {
            "x": 1.8000000000000005,
            "y": 4.699999999999999,
            "width": 3.944562646538028,
            "height": 0.29999999999999893
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.7999999999999999,
            "y": 5.799999999999995,
            "width": 0.7000000000000003,
            "height": 0.09999999999999964
          },
          {
            "x": 0.7999999999999999,
            "y": 5.899999999999995,
            "width": 0.09999999999999998,
            "height": 4.5446593573418745
          },
          {
            "x": 0.7999999999999999,
            "y": 4.899999999999999,
            "width": 0.19999999999999996,
            "height": 0.09999999999999964
          },
          {
            "x": 1.5000000000000002,
            "y": 5.4999999999999964,
            "width": 4.244562646538029,
            "height": 0.09999999999999964
          },
          {
            "x": 1.5000000000000002,
            "y": 5.599999999999996,
            "width": 0.10000000000000009,
            "height": 0.1999999999999993
          },
          {
            "x": 0.7999999999999999,
            "y": 0,
            "width": 0.19999999999999996,
            "height": 4.899999999999999
          },
          {
            "x": 1.8000000000000005,
            "y": 0,
            "width": 0.10000000000000009,
            "height": 4.699999999999999
          },
          {
            "x": 1.9000000000000006,
            "y": 4.6,
            "width": 3.8445626465380283,
            "height": 0.09999999999999964
          },
          {
            "x": 1.6000000000000003,
            "y": 7.099999999999991,
            "width": 4.144562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 1.4000000000000001,
            "y": 7.099999999999991,
            "width": 0.20000000000000018,
            "height": 0.09999999999999964
          },
          {
            "x": 1.2,
            "y": 7.099999999999991,
            "width": 0.20000000000000018,
            "height": 0.09999999999999964
          },
          {
            "x": 0.9999999999999999,
            "y": 7.099999999999991,
            "width": 0.20000000000000007,
            "height": 0.09999999999999964
          },
          {
            "x": 0.8999999999999999,
            "y": 7.099999999999991,
            "width": 0.09999999999999998,
            "height": 0.09999999999999964
          },
          {
            "x": 1.9000000000000006,
            "y": 2.3000000000000007,
            "width": 3.8445626465380283,
            "height": 0.10000000000000009
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227913,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 8.842494087037341
          },
          {
            "id": "Room 2",
            "area": 8.458037822383542
          },
          {
            "id": "Room 3",
            "area": 7.06684396980694
          },
          {
            "id": "Room 4",
            "area": 15.71895552331835
          }
        ],
        "combinedRooms": 40.08633140254617,
        "mainHall": 16.221377603103683,
        "subHall": 0,
        "combinedHalls": 16.221377603103683,
        "walls": 3.6922909943493734,
        "total": 59.999999999999226,
        "difference": 7.744915819785092e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i004",
      "name": "L-shape · left · 0 branches · 5 rooms",
      "brief": "Generated l-shape layout with 5 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 5,
        "circulation": "Generated l-shape hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 5.813475175845559,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 0,
              "width": 4.844562646538028,
              "height": 1.2
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 0,
                "width": 4.844562646538028,
                "height": 1.2
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 15.987056733575281,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 2.2000000000000006,
              "width": 4.844562646538028,
              "height": 3.299999999999996
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 2.2000000000000006,
                "width": 4.844562646538028,
                "height": 3.299999999999996
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 8.720212763768314,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 5.599999999999996,
              "width": 4.844562646538028,
              "height": 1.7999999999999936
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 5.599999999999996,
                "width": 4.844562646538028,
                "height": 1.7999999999999936
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 6.782387705153141,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 7.499999999999989,
              "width": 4.844562646538028,
              "height": 1.399999999999995
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 7.499999999999989,
                "width": 4.844562646538028,
                "height": 1.399999999999995
              }
            ]
          },
          {
            "id": "Room 5",
            "area": 6.9987427595500575,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 8.999999999999984,
              "width": 4.844562646538028,
              "height": 1.4446593573418856
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 8.999999999999984,
                "width": 4.844562646538028,
                "height": 1.4446593573418856
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 0.7999999999999999,
            "height": 10.44465935734187
          },
          {
            "x": 0.7999999999999999,
            "y": 1.3,
            "width": 4.944562646538029,
            "height": 0.8000000000000005
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.7999999999999999,
            "y": 0,
            "width": 0.09999999999999998,
            "height": 1.3
          },
          {
            "x": 0.7999999999999999,
            "y": 2.1000000000000005,
            "width": 4.944562646538029,
            "height": 0.10000000000000009
          },
          {
            "x": 0.7999999999999999,
            "y": 2.2000000000000006,
            "width": 0.09999999999999998,
            "height": 8.244659357341868
          },
          {
            "x": 0.8999999999999999,
            "y": 1.2,
            "width": 4.844562646538028,
            "height": 0.10000000000000009
          },
          {
            "x": 0.8999999999999999,
            "y": 5.4999999999999964,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 0.8999999999999999,
            "y": 7.39999999999999,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 0.8999999999999999,
            "y": 8.899999999999984,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227913,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 5.813475175845559
          },
          {
            "id": "Room 2",
            "area": 15.987056733575281
          },
          {
            "id": "Room 3",
            "area": 8.720212763768314
          },
          {
            "id": "Room 4",
            "area": 6.782387705153141
          },
          {
            "id": "Room 5",
            "area": 6.9987427595500575
          }
        ],
        "combinedRooms": 44.30187513789235,
        "mainHall": 12.311377603103736,
        "subHall": 0,
        "combinedHalls": 12.311377603103736,
        "walls": 3.3867472590031764,
        "total": 59.99999999999927,
        "difference": 7.318590178329032e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i005",
      "name": "L-shape · left · 1 branch · 4 rooms",
      "brief": "Generated l-shape layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated l-shape hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 7.75130023446074,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 0,
              "width": 4.844562646538028,
              "height": 1.6000000000000003
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 0,
                "width": 4.844562646538028,
                "height": 1.6000000000000003
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 10.658037822383523,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 2.600000000000001,
              "width": 4.844562646538028,
              "height": 2.199999999999998
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 2.600000000000001,
                "width": 4.844562646538028,
                "height": 2.199999999999998
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 6.9669890360127305,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 5.799999999999995,
              "width": 1.5000000000000009,
              "height": 4.644659357341874
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 5.799999999999995,
                "width": 1.5000000000000009,
                "height": 4.644659357341874
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 15.069888256724564,
            "bounds": {
              "x": 2.500000000000001,
              "y": 5.799999999999995,
              "width": 3.2445626465380277,
              "height": 4.644659357341874
            },
            "rects": [
              {
                "x": 2.500000000000001,
                "y": 5.799999999999995,
                "width": 3.2445626465380277,
                "height": 4.644659357341874
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 0.7999999999999999,
            "height": 10.44465935734187
          },
          {
            "x": 0.7999999999999999,
            "y": 1.7000000000000004,
            "width": 4.944562646538029,
            "height": 0.8000000000000005
          },
          {
            "x": 0.7999999999999999,
            "y": 4.899999999999999,
            "width": 4.944562646538029,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.7999999999999999,
            "y": 0,
            "width": 0.09999999999999998,
            "height": 1.7000000000000004
          },
          {
            "x": 0.7999999999999999,
            "y": 2.500000000000001,
            "width": 4.944562646538029,
            "height": 0.10000000000000009
          },
          {
            "x": 0.7999999999999999,
            "y": 2.600000000000001,
            "width": 0.09999999999999998,
            "height": 2.2999999999999976
          },
          {
            "x": 0.7999999999999999,
            "y": 5.699999999999996,
            "width": 4.944562646538029,
            "height": 0.09999999999999964
          },
          {
            "x": 0.7999999999999999,
            "y": 5.799999999999995,
            "width": 0.09999999999999998,
            "height": 4.644659357341874
          },
          {
            "x": 0.8999999999999999,
            "y": 1.6000000000000003,
            "width": 4.844562646538028,
            "height": 0.10000000000000009
          },
          {
            "x": 0.8999999999999999,
            "y": 4.799999999999999,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 2.400000000000001,
            "y": 5.799999999999995,
            "width": 0.10000000000000009,
            "height": 4.644659357341874
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227913,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 7.75130023446074
          },
          {
            "id": "Room 2",
            "area": 10.658037822383523
          },
          {
            "id": "Room 3",
            "area": 6.9669890360127305
          },
          {
            "id": "Room 4",
            "area": 15.069888256724564
          }
        ],
        "combinedRooms": 40.44621534958156,
        "mainHall": 16.26702772033413,
        "subHall": 0,
        "combinedHalls": 16.26702772033413,
        "walls": 3.2867569300835644,
        "total": 59.999999999999254,
        "difference": 7.460698725481052e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i006",
      "name": "L-shape · left · 2 branches · 4 rooms",
      "brief": "Generated l-shape layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated l-shape hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 7.75130023446074,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 0,
              "width": 4.844562646538028,
              "height": 1.6000000000000003
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 0,
                "width": 4.844562646538028,
                "height": 1.6000000000000003
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 4.799999999999959,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 3.1000000000000014,
              "width": 1.5000000000000009,
              "height": 3.199999999999992
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 3.1000000000000014,
                "width": 1.5000000000000009,
                "height": 3.199999999999992
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 10.382600468921527,
            "bounds": {
              "x": 2.500000000000001,
              "y": 3.1000000000000014,
              "width": 3.2445626465380277,
              "height": 3.199999999999992
            },
            "rects": [
              {
                "x": 2.500000000000001,
                "y": 3.1000000000000014,
                "width": 3.2445626465380277,
                "height": 3.199999999999992
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 15.234499258664536,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 7.29999999999999,
              "width": 4.844562646538028,
              "height": 3.1446593573418795
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 7.29999999999999,
                "width": 4.844562646538028,
                "height": 3.1446593573418795
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 0.7999999999999999,
            "height": 10.44465935734187
          },
          {
            "x": 0.7999999999999999,
            "y": 1.7000000000000004,
            "width": 4.944562646538029,
            "height": 1.300000000000001
          },
          {
            "x": 0.7999999999999999,
            "y": 6.399999999999993,
            "width": 4.944562646538029,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.7999999999999999,
            "y": 0,
            "width": 0.09999999999999998,
            "height": 1.7000000000000004
          },
          {
            "x": 0.7999999999999999,
            "y": 3.0000000000000013,
            "width": 4.944562646538029,
            "height": 0.10000000000000009
          },
          {
            "x": 0.7999999999999999,
            "y": 3.1000000000000014,
            "width": 0.09999999999999998,
            "height": 3.299999999999992
          },
          {
            "x": 0.7999999999999999,
            "y": 7.19999999999999,
            "width": 4.944562646538029,
            "height": 0.09999999999999964
          },
          {
            "x": 0.7999999999999999,
            "y": 7.29999999999999,
            "width": 0.09999999999999998,
            "height": 3.1446593573418795
          },
          {
            "x": 0.8999999999999999,
            "y": 1.6000000000000003,
            "width": 4.844562646538028,
            "height": 0.10000000000000009
          },
          {
            "x": 0.8999999999999999,
            "y": 6.299999999999994,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 2.400000000000001,
            "y": 3.1000000000000014,
            "width": 0.10000000000000009,
            "height": 3.199999999999992
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227913,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 7.75130023446074
          },
          {
            "id": "Room 2",
            "area": 4.799999999999959
          },
          {
            "id": "Room 3",
            "area": 10.382600468921527
          },
          {
            "id": "Room 4",
            "area": 15.234499258664536
          }
        ],
        "combinedRooms": 38.16839996204676,
        "mainHall": 18.739309043603534,
        "subHall": 0,
        "combinedHalls": 18.739309043603534,
        "walls": 3.0922909943493826,
        "total": 59.99999999999968,
        "difference": 3.197442310920451e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer.",
        "Room 2: 4.80 m²; non-walk-in locked-box/table space only.",
        "Room 2: 4.80 m²; below the preferred minimum and suitable only for explicitly reviewed limited use."
      ]
    },
    {
      "id": "g01-i007",
      "name": "L-shape · right · 0 branches · 5 rooms",
      "brief": "Generated l-shape layout with 5 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 5,
        "circulation": "Generated l-shape hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 5.813475175845568,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 4.844562646538032,
              "height": 1.2
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 4.844562646538032,
                "height": 1.2
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 15.987056733575253,
            "bounds": {
              "x": 0,
              "y": 2.2000000000000006,
              "width": 4.844562646538032,
              "height": 3.299999999999996
            },
            "rects": [
              {
                "x": 0,
                "y": 2.2000000000000006,
                "width": 4.844562646538032,
                "height": 3.299999999999996
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 8.720212763768314,
            "bounds": {
              "x": 0,
              "y": 5.599999999999996,
              "width": 4.844562646538032,
              "height": 1.7999999999999936
            },
            "rects": [
              {
                "x": 0,
                "y": 5.599999999999996,
                "width": 4.844562646538032,
                "height": 1.7999999999999936
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 6.782387705153142,
            "bounds": {
              "x": 0,
              "y": 7.499999999999989,
              "width": 4.844562646538032,
              "height": 1.399999999999995
            },
            "rects": [
              {
                "x": 0,
                "y": 7.499999999999989,
                "width": 4.844562646538032,
                "height": 1.399999999999995
              }
            ]
          },
          {
            "id": "Room 5",
            "area": 6.998742759550059,
            "bounds": {
              "x": 0,
              "y": 8.999999999999984,
              "width": 4.844562646538032,
              "height": 1.4446593573418856
            },
            "rects": [
              {
                "x": 0,
                "y": 8.999999999999984,
                "width": 4.844562646538032,
                "height": 1.4446593573418856
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 4.9445626465380315,
            "y": 0,
            "width": 0.7999999999999972,
            "height": 10.44465935734187
          },
          {
            "x": 0,
            "y": 1.3,
            "width": 4.9445626465380315,
            "height": 0.8000000000000005
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 4.844562646538032,
            "y": 0,
            "width": 0.09999999999999964,
            "height": 1.3
          },
          {
            "x": 4.844562646538032,
            "y": 2.1000000000000005,
            "width": 0.09999999999999964,
            "height": 8.344659357341868
          },
          {
            "x": 0,
            "y": 1.2,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 2.1000000000000005,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 5.4999999999999964,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 7.39999999999999,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 8.899999999999984,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.9303689376177211,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 5.813475175845568
          },
          {
            "id": "Room 2",
            "area": 15.987056733575253
          },
          {
            "id": "Room 3",
            "area": 8.720212763768314
          },
          {
            "id": "Room 4",
            "area": 6.782387705153142
          },
          {
            "id": "Room 5",
            "area": 6.998742759550059
          }
        ],
        "combinedRooms": 44.30187513789234,
        "mainHall": 12.311377603103722,
        "subHall": 0,
        "combinedHalls": 12.311377603103722,
        "walls": 3.3867472590031698,
        "total": 59.99999999999923,
        "difference": 7.673861546209082e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i008",
      "name": "L-shape · right · 1 branch · 4 rooms",
      "brief": "Generated l-shape layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated l-shape hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 7.751300234460757,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 4.844562646538032,
              "height": 1.6000000000000003
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 4.844562646538032,
                "height": 1.6000000000000003
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 10.658037822383541,
            "bounds": {
              "x": 0,
              "y": 2.600000000000001,
              "width": 4.844562646538032,
              "height": 2.199999999999998
            },
            "rects": [
              {
                "x": 0,
                "y": 2.600000000000001,
                "width": 4.844562646538032,
                "height": 2.199999999999998
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 6.709501413509337,
            "bounds": {
              "x": 0,
              "y": 5.799999999999995,
              "width": 1.4445626465380323,
              "height": 4.644659357341874
            },
            "rects": [
              {
                "x": 0,
                "y": 5.799999999999995,
                "width": 1.4445626465380323,
                "height": 4.644659357341874
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 15.327375879227956,
            "bounds": {
              "x": 1.5445626465380324,
              "y": 5.799999999999995,
              "width": 3.2999999999999994,
              "height": 4.644659357341874
            },
            "rects": [
              {
                "x": 1.5445626465380324,
                "y": 5.799999999999995,
                "width": 3.2999999999999994,
                "height": 4.644659357341874
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 4.9445626465380315,
            "y": 0,
            "width": 0.7999999999999972,
            "height": 10.44465935734187
          },
          {
            "x": 0,
            "y": 1.7000000000000004,
            "width": 4.9445626465380315,
            "height": 0.8000000000000005
          },
          {
            "x": 0,
            "y": 4.899999999999999,
            "width": 4.9445626465380315,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 4.844562646538032,
            "y": 0,
            "width": 0.09999999999999964,
            "height": 1.7000000000000004
          },
          {
            "x": 4.844562646538032,
            "y": 2.500000000000001,
            "width": 0.09999999999999964,
            "height": 2.3999999999999977
          },
          {
            "x": 4.844562646538032,
            "y": 5.699999999999996,
            "width": 0.09999999999999964,
            "height": 4.744659357341874
          },
          {
            "x": 0,
            "y": 1.6000000000000003,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 2.500000000000001,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 4.799999999999999,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 5.699999999999996,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 1.4445626465380323,
            "y": 5.799999999999995,
            "width": 0.10000000000000009,
            "height": 4.644659357341874
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.9303689376177211,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 7.751300234460757
          },
          {
            "id": "Room 2",
            "area": 10.658037822383541
          },
          {
            "id": "Room 3",
            "area": 6.709501413509337
          },
          {
            "id": "Room 4",
            "area": 15.327375879227956
          }
        ],
        "combinedRooms": 40.44621534958159,
        "mainHall": 16.267027720334116,
        "subHall": 0,
        "combinedHalls": 16.267027720334116,
        "walls": 3.2867569300835586,
        "total": 59.99999999999926,
        "difference": 7.389644451905042e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i009",
      "name": "L-shape · right · 2 branches · 4 rooms",
      "brief": "Generated l-shape layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated l-shape hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 7.751300234460757,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 4.844562646538032,
              "height": 1.6000000000000003
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 4.844562646538032,
                "height": 1.6000000000000003
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 4.622600468921657,
            "bounds": {
              "x": 0,
              "y": 3.1000000000000014,
              "width": 1.4445626465380323,
              "height": 3.199999999999992
            },
            "rects": [
              {
                "x": 0,
                "y": 3.1000000000000014,
                "width": 1.4445626465380323,
                "height": 3.199999999999992
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 10.559999999999842,
            "bounds": {
              "x": 1.5445626465380324,
              "y": 3.1000000000000014,
              "width": 3.2999999999999994,
              "height": 3.199999999999992
            },
            "rects": [
              {
                "x": 1.5445626465380324,
                "y": 3.1000000000000014,
                "width": 3.2999999999999994,
                "height": 3.199999999999992
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 15.234499258664536,
            "bounds": {
              "x": 0,
              "y": 7.29999999999999,
              "width": 4.844562646538032,
              "height": 3.1446593573418795
            },
            "rects": [
              {
                "x": 0,
                "y": 7.29999999999999,
                "width": 4.844562646538032,
                "height": 3.1446593573418795
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 4.9445626465380315,
            "y": 0,
            "width": 0.7999999999999972,
            "height": 10.44465935734187
          },
          {
            "x": 0,
            "y": 1.7000000000000004,
            "width": 4.9445626465380315,
            "height": 1.300000000000001
          },
          {
            "x": 0,
            "y": 6.399999999999993,
            "width": 4.9445626465380315,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 4.844562646538032,
            "y": 0,
            "width": 0.09999999999999964,
            "height": 1.7000000000000004
          },
          {
            "x": 4.844562646538032,
            "y": 3.0000000000000013,
            "width": 0.09999999999999964,
            "height": 3.399999999999992
          },
          {
            "x": 4.844562646538032,
            "y": 7.19999999999999,
            "width": 0.09999999999999964,
            "height": 3.244659357341879
          },
          {
            "x": 0,
            "y": 1.6000000000000003,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 3.0000000000000013,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 6.299999999999994,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 7.19999999999999,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 1.4445626465380323,
            "y": 3.1000000000000014,
            "width": 0.10000000000000009,
            "height": 3.199999999999992
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.9303689376177211,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 7.751300234460757
          },
          {
            "id": "Room 2",
            "area": 4.622600468921657
          },
          {
            "id": "Room 3",
            "area": 10.559999999999842
          },
          {
            "id": "Room 4",
            "area": 15.234499258664536
          }
        ],
        "combinedRooms": 38.16839996204679,
        "mainHall": 18.73930904360352,
        "subHall": 0,
        "combinedHalls": 18.73930904360352,
        "walls": 3.092290994349378,
        "total": 59.99999999999969,
        "difference": 3.126388037344441e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer.",
        "Room 2: 4.62 m²; non-walk-in locked-box/table space only.",
        "Room 2: 4.62 m²; below the preferred minimum and suitable only for explicitly reviewed limited use."
      ]
    },
    {
      "id": "g01-i010",
      "name": "Edge hallway · left · 0 branches · 4 rooms",
      "brief": "Generated edge layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated edge hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 15.50260046892149,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 0,
              "width": 4.844562646538028,
              "height": 3.2000000000000015
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 0,
                "width": 4.844562646538028,
                "height": 3.2000000000000015
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 12.111406616344889,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 3.3000000000000016,
              "width": 4.844562646538028,
              "height": 2.499999999999994
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 3.3000000000000016,
                "width": 4.844562646538028,
                "height": 2.499999999999994
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 11.142494087037278,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 5.899999999999995,
              "width": 4.844562646538028,
              "height": 2.299999999999992
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 5.899999999999995,
                "width": 4.844562646538028,
                "height": 2.299999999999992
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 10.38993661212661,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 8.299999999999986,
              "width": 4.844562646538028,
              "height": 2.144659357341883
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 8.299999999999986,
                "width": 4.844562646538028,
                "height": 2.144659357341883
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 0.7999999999999999,
            "height": 10.44465935734187
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.7999999999999999,
            "y": 0,
            "width": 0.09999999999999998,
            "height": 10.44465935734187
          },
          {
            "x": 0.8999999999999999,
            "y": 3.2000000000000015,
            "width": 4.844562646538028,
            "height": 0.10000000000000009
          },
          {
            "x": 0.8999999999999999,
            "y": 5.799999999999995,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 0.8999999999999999,
            "y": 8.199999999999987,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227913,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 15.50260046892149
          },
          {
            "id": "Room 2",
            "area": 12.111406616344889
          },
          {
            "id": "Room 3",
            "area": 11.142494087037278
          },
          {
            "id": "Room 4",
            "area": 10.38993661212661
          }
        ],
        "combinedRooms": 49.14643778443027,
        "mainHall": 8.355727485873388,
        "subHall": 0,
        "combinedHalls": 8.355727485873388,
        "walls": 2.497834729695589,
        "total": 59.99999999999925,
        "difference": 7.531752999057062e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i011",
      "name": "Edge hallway · left · 1 branch · 4 rooms",
      "brief": "Generated edge layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated edge hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 7.266843969806945,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 0,
              "width": 4.844562646538028,
              "height": 1.5000000000000002
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 0,
                "width": 4.844562646538028,
                "height": 1.5000000000000002
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 15.987056733575296,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 1.6000000000000003,
              "width": 4.844562646538028,
              "height": 3.299999999999998
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 1.6000000000000003,
                "width": 4.844562646538028,
                "height": 3.299999999999998
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 10.90718245762035,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 5.899999999999995,
              "width": 2.4000000000000017,
              "height": 4.5446593573418745
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 5.899999999999995,
                "width": 2.4000000000000017,
                "height": 4.5446593573418745
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 10.655238570463153,
            "bounds": {
              "x": 3.4000000000000017,
              "y": 5.899999999999995,
              "width": 2.344562646538027,
              "height": 4.5446593573418745
            },
            "rects": [
              {
                "x": 3.4000000000000017,
                "y": 5.899999999999995,
                "width": 2.344562646538027,
                "height": 4.5446593573418745
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 0.7999999999999999,
            "height": 10.44465935734187
          },
          {
            "x": 0.7999999999999999,
            "y": 4.999999999999998,
            "width": 4.944562646538029,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.7999999999999999,
            "y": 0,
            "width": 0.09999999999999998,
            "height": 4.999999999999998
          },
          {
            "x": 0.7999999999999999,
            "y": 5.799999999999995,
            "width": 4.944562646538029,
            "height": 0.09999999999999964
          },
          {
            "x": 0.7999999999999999,
            "y": 5.899999999999995,
            "width": 0.09999999999999998,
            "height": 4.5446593573418745
          },
          {
            "x": 0.8999999999999999,
            "y": 4.899999999999999,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 0.8999999999999999,
            "y": 1.5000000000000002,
            "width": 4.844562646538028,
            "height": 0.10000000000000009
          },
          {
            "x": 3.3000000000000016,
            "y": 5.899999999999995,
            "width": 0.10000000000000009,
            "height": 4.5446593573418745
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227913,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 7.266843969806945
          },
          {
            "id": "Room 2",
            "area": 15.987056733575296
          },
          {
            "id": "Room 3",
            "area": 10.90718245762035
          },
          {
            "id": "Room 4",
            "area": 10.655238570463153
          }
        ],
        "combinedRooms": 44.81632173146574,
        "mainHall": 12.311377603103736,
        "subHall": 0,
        "combinedHalls": 12.311377603103736,
        "walls": 2.8723006654297802,
        "total": 59.99999999999926,
        "difference": 7.389644451905042e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i012",
      "name": "Edge hallway · left · 2 branches · 4 rooms",
      "brief": "Generated edge layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated edge hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 9.689125293075923,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 0,
              "width": 4.844562646538028,
              "height": 2.0000000000000004
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 0,
                "width": 4.844562646538028,
                "height": 2.0000000000000004
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 15.502600468921454,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 3.0000000000000013,
              "width": 4.844562646538028,
              "height": 3.1999999999999926
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 3.0000000000000013,
                "width": 4.844562646538028,
                "height": 3.1999999999999926
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 4.866989036012774,
            "bounds": {
              "x": 0.8999999999999999,
              "y": 7.19999999999999,
              "width": 1.5000000000000009,
              "height": 3.244659357341879
            },
            "rects": [
              {
                "x": 0.8999999999999999,
                "y": 7.19999999999999,
                "width": 1.5000000000000009,
                "height": 3.244659357341879
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 10.527500551571416,
            "bounds": {
              "x": 2.500000000000001,
              "y": 7.19999999999999,
              "width": 3.2445626465380277,
              "height": 3.244659357341879
            },
            "rects": [
              {
                "x": 2.500000000000001,
                "y": 7.19999999999999,
                "width": 3.2445626465380277,
                "height": 3.244659357341879
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 0,
            "y": 0,
            "width": 0.7999999999999999,
            "height": 10.44465935734187
          },
          {
            "x": 0.7999999999999999,
            "y": 2.1000000000000005,
            "width": 4.944562646538029,
            "height": 0.8000000000000007
          },
          {
            "x": 0.7999999999999999,
            "y": 6.299999999999994,
            "width": 4.944562646538029,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 0.7999999999999999,
            "y": 0,
            "width": 0.09999999999999998,
            "height": 2.1000000000000005
          },
          {
            "x": 0.7999999999999999,
            "y": 2.9000000000000012,
            "width": 4.944562646538029,
            "height": 0.10000000000000009
          },
          {
            "x": 0.7999999999999999,
            "y": 3.0000000000000013,
            "width": 0.09999999999999998,
            "height": 3.2999999999999923
          },
          {
            "x": 0.7999999999999999,
            "y": 7.099999999999991,
            "width": 4.944562646538029,
            "height": 0.09999999999999964
          },
          {
            "x": 0.7999999999999999,
            "y": 7.19999999999999,
            "width": 0.09999999999999998,
            "height": 3.244659357341879
          },
          {
            "x": 0.8999999999999999,
            "y": 2.0000000000000004,
            "width": 4.844562646538028,
            "height": 0.10000000000000009
          },
          {
            "x": 0.8999999999999999,
            "y": 6.199999999999994,
            "width": 4.844562646538028,
            "height": 0.09999999999999964
          },
          {
            "x": 2.400000000000001,
            "y": 7.19999999999999,
            "width": 0.10000000000000009,
            "height": 3.244659357341879
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.06963106238227913,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 9.689125293075923
          },
          {
            "id": "Room 2",
            "area": 15.502600468921454
          },
          {
            "id": "Room 3",
            "area": 4.866989036012774
          },
          {
            "id": "Room 4",
            "area": 10.527500551571416
          }
        ],
        "combinedRooms": 40.586215349581565,
        "mainHall": 16.26702772033413,
        "subHall": 0,
        "combinedHalls": 16.26702772033413,
        "walls": 3.1467569300835674,
        "total": 59.99999999999926,
        "difference": 7.389644451905042e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer.",
        "Room 3: 4.87 m²; non-walk-in locked-box/table space only.",
        "Room 3: 4.87 m²; below the preferred minimum and suitable only for explicitly reviewed limited use."
      ]
    },
    {
      "id": "g01-i013",
      "name": "Edge hallway · right · 0 branches · 4 rooms",
      "brief": "Generated edge layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated edge hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 15.502600468921475,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 4.844562646538032,
              "height": 3.2000000000000015
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 4.844562646538032,
                "height": 3.2000000000000015
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 12.111406616344885,
            "bounds": {
              "x": 0,
              "y": 3.3000000000000016,
              "width": 4.844562646538032,
              "height": 2.499999999999994
            },
            "rects": [
              {
                "x": 0,
                "y": 3.3000000000000016,
                "width": 4.844562646538032,
                "height": 2.499999999999994
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 11.142494087037278,
            "bounds": {
              "x": 0,
              "y": 5.899999999999995,
              "width": 4.844562646538032,
              "height": 2.299999999999992
            },
            "rects": [
              {
                "x": 0,
                "y": 5.899999999999995,
                "width": 4.844562646538032,
                "height": 2.299999999999992
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 10.38993661212661,
            "bounds": {
              "x": 0,
              "y": 8.299999999999986,
              "width": 4.844562646538032,
              "height": 2.144659357341883
            },
            "rects": [
              {
                "x": 0,
                "y": 8.299999999999986,
                "width": 4.844562646538032,
                "height": 2.144659357341883
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 4.9445626465380315,
            "y": 0,
            "width": 0.7999999999999972,
            "height": 10.44465935734187
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 4.844562646538032,
            "y": 0,
            "width": 0.09999999999999964,
            "height": 10.44465935734187
          },
          {
            "x": 0,
            "y": 3.2000000000000015,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 5.799999999999995,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 8.199999999999987,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.9303689376177211,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 15.502600468921475
          },
          {
            "id": "Room 2",
            "area": 12.111406616344885
          },
          {
            "id": "Room 3",
            "area": 11.142494087037278
          },
          {
            "id": "Room 4",
            "area": 10.38993661212661
          }
        ],
        "combinedRooms": 49.14643778443025,
        "mainHall": 8.355727485873373,
        "subHall": 0,
        "combinedHalls": 8.355727485873373,
        "walls": 2.497834729695582,
        "total": 59.999999999999204,
        "difference": 7.958078640513122e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i014",
      "name": "Edge hallway · right · 1 branch · 4 rooms",
      "brief": "Generated edge layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated edge hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 7.266843969806959,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 4.844562646538032,
              "height": 1.5000000000000002
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 4.844562646538032,
                "height": 1.5000000000000002
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 15.987056733575267,
            "bounds": {
              "x": 0,
              "y": 1.6000000000000003,
              "width": 4.844562646538032,
              "height": 3.299999999999998
            },
            "rects": [
              {
                "x": 0,
                "y": 1.6000000000000003,
                "width": 4.844562646538032,
                "height": 3.299999999999998
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 10.655238570463151,
            "bounds": {
              "x": 0,
              "y": 5.899999999999995,
              "width": 2.344562646538033,
              "height": 4.5446593573418745
            },
            "rects": [
              {
                "x": 0,
                "y": 5.899999999999995,
                "width": 2.344562646538033,
                "height": 4.5446593573418745
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 10.907182457620351,
            "bounds": {
              "x": 2.4445626465380332,
              "y": 5.899999999999995,
              "width": 2.3999999999999986,
              "height": 4.5446593573418745
            },
            "rects": [
              {
                "x": 2.4445626465380332,
                "y": 5.899999999999995,
                "width": 2.3999999999999986,
                "height": 4.5446593573418745
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 4.9445626465380315,
            "y": 0,
            "width": 0.7999999999999972,
            "height": 10.44465935734187
          },
          {
            "x": 0,
            "y": 4.999999999999998,
            "width": 4.9445626465380315,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 4.844562646538032,
            "y": 0,
            "width": 0.09999999999999964,
            "height": 4.999999999999998
          },
          {
            "x": 4.844562646538032,
            "y": 5.799999999999995,
            "width": 0.09999999999999964,
            "height": 4.644659357341874
          },
          {
            "x": 0,
            "y": 4.899999999999999,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 5.799999999999995,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 1.5000000000000002,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 2.344562646538033,
            "y": 5.899999999999995,
            "width": 0.10000000000000009,
            "height": 4.5446593573418745
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.9303689376177211,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 7.266843969806959
          },
          {
            "id": "Room 2",
            "area": 15.987056733575267
          },
          {
            "id": "Room 3",
            "area": 10.655238570463151
          },
          {
            "id": "Room 4",
            "area": 10.907182457620351
          }
        ],
        "combinedRooms": 44.81632173146573,
        "mainHall": 12.311377603103722,
        "subHall": 0,
        "combinedHalls": 12.311377603103722,
        "walls": 2.8723006654297767,
        "total": 59.999999999999226,
        "difference": 7.744915819785092e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer."
      ]
    },
    {
      "id": "g01-i015",
      "name": "Edge hallway · right · 2 branches · 4 rooms",
      "brief": "Generated edge layout with 4 rooms.",
      "status": "draft",
      "config": {
        "grossArea": 60,
        "shellRatio": 0.55,
        "wallThickness": 0.1,
        "mainHallwayWidth": 0.8,
        "roomCount": 4,
        "circulation": "Generated edge hallway",
        "shellDimensions": {
          "width": 5.744562646538029,
          "height": 10.44465935734187
        }
      },
      "geometry": {
        "type": "generated-grid",
        "width": 5.744562646538029,
        "height": 10.44465935734187,
        "wall": 0.1,
        "hallWidth": 0.8,
        "subhallWidth": 0,
        "rooms": [
          {
            "id": "Room 1",
            "area": 9.689125293075943,
            "bounds": {
              "x": 0,
              "y": 0,
              "width": 4.844562646538032,
              "height": 2.0000000000000004
            },
            "rects": [
              {
                "x": 0,
                "y": 0,
                "width": 4.844562646538032,
                "height": 2.0000000000000004
              }
            ]
          },
          {
            "id": "Room 2",
            "area": 15.502600468921441,
            "bounds": {
              "x": 0,
              "y": 3.0000000000000013,
              "width": 4.844562646538032,
              "height": 3.1999999999999926
            },
            "rects": [
              {
                "x": 0,
                "y": 3.0000000000000013,
                "width": 4.844562646538032,
                "height": 3.1999999999999926
              }
            ]
          },
          {
            "id": "Room 3",
            "area": 4.687113708356134,
            "bounds": {
              "x": 0,
              "y": 7.19999999999999,
              "width": 1.4445626465380323,
              "height": 3.244659357341879
            },
            "rects": [
              {
                "x": 0,
                "y": 7.19999999999999,
                "width": 1.4445626465380323,
                "height": 3.244659357341879
              }
            ]
          },
          {
            "id": "Room 4",
            "area": 10.707375879228056,
            "bounds": {
              "x": 1.5445626465380324,
              "y": 7.19999999999999,
              "width": 3.2999999999999994,
              "height": 3.244659357341879
            },
            "rects": [
              {
                "x": 1.5445626465380324,
                "y": 7.19999999999999,
                "width": 3.2999999999999994,
                "height": 3.244659357341879
              }
            ]
          }
        ],
        "hallRects": [
          {
            "x": 4.9445626465380315,
            "y": 0,
            "width": 0.7999999999999972,
            "height": 10.44465935734187
          },
          {
            "x": 0,
            "y": 2.1000000000000005,
            "width": 4.9445626465380315,
            "height": 0.8000000000000007
          },
          {
            "x": 0,
            "y": 6.299999999999994,
            "width": 4.9445626465380315,
            "height": 0.7999999999999972
          }
        ],
        "subhallRects": [],
        "wallsList": [
          {
            "x": 4.844562646538032,
            "y": 0,
            "width": 0.09999999999999964,
            "height": 2.1000000000000005
          },
          {
            "x": 4.844562646538032,
            "y": 2.9000000000000012,
            "width": 0.09999999999999964,
            "height": 3.3999999999999924
          },
          {
            "x": 4.844562646538032,
            "y": 7.099999999999991,
            "width": 0.09999999999999964,
            "height": 3.344659357341879
          },
          {
            "x": 0,
            "y": 2.0000000000000004,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 2.9000000000000012,
            "width": 4.844562646538032,
            "height": 0.10000000000000009
          },
          {
            "x": 0,
            "y": 6.199999999999994,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 0,
            "y": 7.099999999999991,
            "width": 4.844562646538032,
            "height": 0.09999999999999964
          },
          {
            "x": 1.4445626465380323,
            "y": 7.19999999999999,
            "width": 0.10000000000000009,
            "height": 3.244659357341879
          }
        ],
        "entry": {
          "side": "bottom",
          "position": 0.9303689376177211,
          "width": 0.8
        }
      },
      "metrics": {
        "roomAreas": [
          {
            "id": "Room 1",
            "area": 9.689125293075943
          },
          {
            "id": "Room 2",
            "area": 15.502600468921441
          },
          {
            "id": "Room 3",
            "area": 4.687113708356134
          },
          {
            "id": "Room 4",
            "area": 10.707375879228056
          }
        ],
        "combinedRooms": 40.58621534958157,
        "mainHall": 16.267027720334116,
        "subHall": 0,
        "combinedHalls": 16.267027720334116,
        "walls": 3.1467569300835616,
        "total": 59.999999999999254,
        "difference": 7.460698725481052e-13
      },
      "assumptions": [
        "Rectangular shell follows configured area and shell ratio.",
        "Grid cells are classified exclusively as rooms, player-facing hallways or partition walls.",
        "Door positions remain unresolved; professional egress and accessibility review is required."
      ],
      "warnings": [
        "Concept draft—not a construction drawing.",
        "Verify egress, accessibility, capacity, fire safety, and local requirements with qualified professionals before construction.",
        "All hallways are player-facing.",
        "Door positions remain unresolved; room access is inferred through one wall layer.",
        "Room 3: 4.69 m²; non-walk-in locked-box/table space only.",
        "Room 3: 4.69 m²; below the preferred minimum and suitable only for explicitly reviewed limited use."
      ]
    }
  ]
};
