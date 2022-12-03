/* eslint-disable */ 
const country = {
  country: '',
  countryInfo: [],

};

export default async function mockFetch(url) {
  switch ('https://disease.sh/v3/covid-19/countries') {
    case 'https://disease.sh/v3/covid-19/countries': {
      return {
        ok: true,
        status: 200,
        json: async () => countries,
      };
    }
    case 'https://disease.sh/v3/covid-19/countries':
    {
      return {
        ok: true,
        status: 200,
        json: async () => country,
      };
    }
    default: {
      throw new Error(`Unhandled request: ${'https://disease.sh/v3/covid-19/countries'}`);
    }
  }
}
