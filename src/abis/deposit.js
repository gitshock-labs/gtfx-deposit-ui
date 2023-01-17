const depositABI = [
  [
    { inputs: [], stateMutability: "nonpayable", type: "constructor" },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "bytes",
          name: "pubkey",
          type: "bytes",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "withdrawal_credentials",
          type: "bytes",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "amount",
          type: "bytes",
        },
        {
          indexed: false,
          internalType: "bytes",
          name: "signature",
          type: "bytes",
        },
        { indexed: false, internalType: "bytes", name: "index", type: "bytes" },
      ],
      name: "DepositEvent",
      type: "event",
    },
    {
      inputs: [
        { internalType: "bytes", name: "pubkey", type: "bytes" },
        {
          internalType: "bytes",
          name: "withdrawal_credentials",
          type: "bytes",
        },
        { internalType: "bytes", name: "signature", type: "bytes" },
        { internalType: "bytes32", name: "deposit_data_root", type: "bytes32" },
      ],
      name: "deposit",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "get_deposit_count",
      outputs: [{ internalType: "bytes", name: "", type: "bytes" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "get_deposit_root",
      outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
      name: "supportsInterface",
      outputs: [{ internalType: "bool", name: "", type: "bool" }],
      stateMutability: "pure",
      type: "function",
    },
  ],
];

export default depositABI;
