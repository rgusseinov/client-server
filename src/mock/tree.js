export const tree = [
  {
    "id": 1,
    "name": "Parent Node 1",
    "ip": "192.168.1.1",
    "webPort": "80",
    "nodes": [
      {
        "id": 2,
        "name": "Child node 1",
        "ip": "192.168.1.2",
        "webPort": "80"
      },
      {
        "id": 3,
        "name": "Child node 2",
        "ip": "192.168.1.2",
        "webPort": "80"
      },
      {
        "id": 4,
        "name": "Child node 3",
        "ip": "192.168.1.2",
        "webPort": "80",
        "nodes": [
          {
            "id": 5,
            "name": "Sub node 1",
            "ip": "192.168.1.2",
            "webPort": "80"
          },
        ]
      },
    ]
  },
  {
    "id": 6,
    "name": "Parent Node 2",
    "ip": "192.168.1.2",
    "webPort": "8181",
    "nodes": [
      {
        "id": 7,
        "name": "Child node 4",
        "ip": "192.168.1.3",
        "webPort": "8181"
      },
    ]
  }
];
