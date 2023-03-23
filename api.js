async function fetchDiagram() {
  return fetch(
    // Replace PROCESS_DEFINITION_ID with a process definition id
    "http://localhost:3030/v1/process-definitions/PROCESS_DEFINITION_ID/xml",
    {
      method: "GET",
    },
  ).then((response) => response.text());
}

async function fetchStatistics() {
  return fetch(
    // Replace PROCESS_INSTANCE_ID with a process instance id
    "http://localhost:3030/v1/process-instances/PROCESS_INSTANCE_ID/statistics",
    {
      method: "GET",
    },
  ).then((response) => response.json());
}

async function fetchSequenceFlows() {
  return fetch(
    // Replace PROCESS_INSTANCE_ID with a process instance id
    "http://localhost:3030/v1/process-instances/PROCESS_INSTANCE_ID/sequence-flows",
    {
      method: "GET",
    },
  ).then((response) => response.json());
}
