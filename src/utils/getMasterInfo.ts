type Response = {
  name: string;
};

function getLukeInfo(): Promise<Response> {
  return fetch('https://swapi.dev/api/people/1').then((res) => res.json());
}

function getVaderInfo(): Promise<Response> {
  return fetch('https://swapi.dev/api/people/4').then((res) => res.json());
}

async function getMasterInfo() {
  const response = await Promise.race([getVaderInfo(), getLukeInfo()]);

  return response;
}

export { getMasterInfo };
