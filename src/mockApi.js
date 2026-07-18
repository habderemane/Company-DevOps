const MOCK_USERS = [
  { id: 1, name: 'Aïssatou Diop', role: 'DevOps Engineer' },
  { id: 2, name: 'Moussa Ndiaye', role: 'Frontend Developer' },
  { id: 3, name: 'Fatou Sow', role: 'Backend Developer' },
];

export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_USERS), 400);
  });
}