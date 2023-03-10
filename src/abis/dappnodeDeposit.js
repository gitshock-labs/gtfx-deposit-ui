const dappnodeDepositABI = [
  { type: "event", name: "CancelIncentive", inputs: [], anonymous: false },
  {
    type: "event",
    name: "ClaimedIncentive",
    inputs: [
      {
        type: "address",
        name: "beneficary",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  { type: "event", name: "NewIncentive", inputs: [], anonymous: false },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        type: "address",
        name: "previousOwner",
        internalType: "address",
        indexed: true,
      },
      {
        type: "address",
        name: "newOwner",
        internalType: "address",
        indexed: true,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetIncentiveDuration",
    inputs: [
      {
        type: "uint256",
        name: "newIncentiveDuration",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetValidatorNum",
    inputs: [
      {
        type: "uint256",
        name: "newValidatorNum",
        internalType: "uint256",
        indexed: false,
      },
    ],
    anonymous: false,
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "DEPOSIT_AMOUNT",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "addBeneficiaries",
    inputs: [
      { type: "address[]", name: "addressArray", internalType: "address[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [
      { type: "uint256", name: "endTime", internalType: "uint256" },
      { type: "bool", name: "isClaimed", internalType: "bool" },
    ],
    name: "addressToIncentive",
    inputs: [{ type: "address", name: "", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "cancelIncentive",
    inputs: [
      { type: "address[]", name: "addressArray", internalType: "address[]" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "claimIncentive",
    inputs: [{ type: "bytes", name: "data", internalType: "bytes" }],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "claimTokens",
    inputs: [
      {
        type: "address",
        name: "_token",
        internalType: "contract IERC20Upgradeable",
      },
      { type: "address", name: "_to", internalType: "address" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "incentiveDuration",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "initialize",
    inputs: [
      { type: "address", name: "_sbcToken", internalType: "contract IERC677" },
      { type: "address", name: "_sbcDepositContract", internalType: "address" },
      { type: "uint256", name: "_validatorNum", internalType: "uint256" },
      { type: "uint256", name: "_incentiveDuration", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "owner",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "renounceOwnership",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "address" }],
    name: "sbcDepositContract",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "address", name: "", internalType: "contract IERC677" }],
    name: "sbcToken",
    inputs: [],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setIncentiveDuration",
    inputs: [
      {
        type: "uint256",
        name: "newIncentiveDuration",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "setValidatorNum",
    inputs: [
      { type: "uint256", name: "newValidatorNum", internalType: "uint256" },
    ],
  },
  {
    type: "function",
    stateMutability: "nonpayable",
    outputs: [],
    name: "transferOwnership",
    inputs: [{ type: "address", name: "newOwner", internalType: "address" }],
  },
  {
    type: "function",
    stateMutability: "view",
    outputs: [{ type: "uint256", name: "", internalType: "uint256" }],
    name: "validatorNum",
    inputs: [],
  },
];

export default dappnodeDepositABI;
