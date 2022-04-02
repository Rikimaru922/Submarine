export type ZillaStaking = {
  "version": "0.1.0",
  "name": "zilla_staking",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPoolData",
      "accounts": [
        {
          "name": "poolData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "poolData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "method",
          "type": "u8"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "poolData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "poolData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "breed",
      "accounts": [
        {
          "name": "vault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "zillaData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "kongData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "zillaAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "kongAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "incubatorFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "incubatorTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "zillaMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "kongMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "incubatorMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "confirmBreed",
      "accounts": [
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "claimBreed",
      "accounts": [
        {
          "name": "poolData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "parentData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "getFreeAsset",
      "accounts": [
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "getAsset",
      "accounts": [
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "confirmUpdate",
      "accounts": [
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "retrieveOnBreed",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "retrieveOnUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "vault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpVault",
            "type": "u8"
          },
          {
            "name": "totalCount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpPool",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "poolData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "method",
            "type": "u8"
          },
          {
            "name": "startTime",
            "type": "u32"
          },
          {
            "name": "bumpPoolData",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ParentData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "incubator",
            "type": "publicKey"
          },
          {
            "name": "breedingTime",
            "type": "u32"
          },
          {
            "name": "bumpParentData",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "IncubatorData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "zilla",
            "type": "publicKey"
          },
          {
            "name": "kong",
            "type": "publicKey"
          },
          {
            "name": "incubator",
            "type": "publicKey"
          },
          {
            "name": "minter",
            "type": "publicKey"
          },
          {
            "name": "breedingTime",
            "type": "u32"
          },
          {
            "name": "zillaClaimed",
            "type": "bool"
          },
          {
            "name": "kongClaimed",
            "type": "bool"
          },
          {
            "name": "nftType",
            "type": "u8"
          },
          {
            "name": "state",
            "type": "u8"
          },
          {
            "name": "updateCount",
            "type": "u32"
          },
          {
            "name": "bumpIncubatorData",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MethodOutRange",
      "msg": "Method is out of range."
    },
    {
      "code": 6001,
      "name": "InvaildUser",
      "msg": "Invalid User."
    },
    {
      "code": 6002,
      "name": "ClaimLocked",
      "msg": "Claiming Locked"
    },
    {
      "code": 6003,
      "name": "InvalidNft",
      "msg": "Invalid Nft"
    },
    {
      "code": 6004,
      "name": "FreeUpdateInvalid",
      "msg": "Free update invalid"
    }
  ]
}

export const IDL: ZillaStaking = {
  "version": "0.1.0",
  "name": "zilla_staking",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPool",
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "createPoolData",
      "accounts": [
        {
          "name": "poolData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "poolData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "method",
          "type": "u8"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "poolData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "poolData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "breed",
      "accounts": [
        {
          "name": "vault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "zillaData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "kongData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "zillaAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "kongAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "incubatorFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "incubatorTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "zillaMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "kongMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "incubatorMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "bump",
          "type": "u8"
        }
      ]
    },
    {
      "name": "confirmBreed",
      "accounts": [
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "claimBreed",
      "accounts": [
        {
          "name": "poolData",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "parentData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "nftFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "getFreeAsset",
      "accounts": [
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "getAsset",
      "accounts": [
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "confirmUpdate",
      "accounts": [
        {
          "name": "incubatorData",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "retrieveOnBreed",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "retrieveOnUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "vault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "vault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpVault",
            "type": "u8"
          },
          {
            "name": "totalCount",
            "type": "u32"
          }
        ]
      }
    },
    {
      "name": "Pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpPool",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "poolData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          },
          {
            "name": "method",
            "type": "u8"
          },
          {
            "name": "startTime",
            "type": "u32"
          },
          {
            "name": "bumpPoolData",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "ParentData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "incubator",
            "type": "publicKey"
          },
          {
            "name": "breedingTime",
            "type": "u32"
          },
          {
            "name": "bumpParentData",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "IncubatorData",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "zilla",
            "type": "publicKey"
          },
          {
            "name": "kong",
            "type": "publicKey"
          },
          {
            "name": "incubator",
            "type": "publicKey"
          },
          {
            "name": "minter",
            "type": "publicKey"
          },
          {
            "name": "breedingTime",
            "type": "u32"
          },
          {
            "name": "zillaClaimed",
            "type": "bool"
          },
          {
            "name": "kongClaimed",
            "type": "bool"
          },
          {
            "name": "nftType",
            "type": "u8"
          },
          {
            "name": "state",
            "type": "u8"
          },
          {
            "name": "updateCount",
            "type": "u32"
          },
          {
            "name": "bumpIncubatorData",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MethodOutRange",
      "msg": "Method is out of range."
    },
    {
      "code": 6001,
      "name": "InvaildUser",
      "msg": "Invalid User."
    },
    {
      "code": 6002,
      "name": "ClaimLocked",
      "msg": "Claiming Locked"
    },
    {
      "code": 6003,
      "name": "InvalidNft",
      "msg": "Invalid Nft"
    },
    {
      "code": 6004,
      "name": "FreeUpdateInvalid",
      "msg": "Free update invalid"
    }
  ]
}


