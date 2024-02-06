import { useEffect, useState, useCallback } from 'react';

export interface ClimaData {
  text_icon: {
    icon: {
      dawn: string;
      morning: string;
      afternoon: string;
      night: string;
      day: string;
    };
    text: {
      pt: string;
    };
  };
  date_br: string;
  temperature: {
    min: number;
    max: number;
  };
  humidity: {
    min: number;
    max: number;
  };
  sun: {
    sunrise: string;
    sunset: string;
  };
  rain: {
    probability: number;
  };
}

const useClima = () => {
  const [climaData, setClimaData] = useState<{ data: ClimaData[] } | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchClimaData = useCallback(async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_CLIMATEMPO_API_URL;
      const apiToken = process.env.NEXT_PUBLIC_API_CLIMATEMPO_API_TOKEN;

      if (!apiUrl || !apiToken) {
        throw new Error('Chaves ou URLs ausentes nas variáveis de ambiente.');
      }

      let response;

      try {
        response = await fetch(`${apiUrl}?token=${apiToken}`);

        if (!response.ok) {
          throw new Error(
            `Erro na requisição: ${response.status} - ${response.statusText}`
          );
        }

        const data = await response.json();

        if (!data || !data.name) {
          throw new Error('Resposta inválida da API');
        }

        if (data) {
          setClimaData(data);
        }
      } catch (error) {
        console.error('Erro ao obter dados meteorológicos:', error);
        console.log('Resposta da API:', response?.text());
        setError('Erro ao obter dados meteorológicos');
      } finally {
        setLoading(false);
      }
    } catch (error) {
      console.error('Erro ao obter dados meteorológicos:', error);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await fetchClimaData();
    };

    fetchData();
  }, [fetchClimaData]);

  return { climaData, loading, error };
};

export default useClima;
