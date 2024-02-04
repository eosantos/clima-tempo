import { useEffect, useState, useCallback } from 'react';

interface ClimaData {
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
  const [climaData, setClimaData] = useState<ClimaData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchClimaData = useCallback(async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_CLIMATEMPO_API_URL;
      const apiToken = process.env.NEXT_PUBLIC_API_CLIMATEMPO_API_TOKEN;

      if (!apiUrl || !apiToken) {
        throw new Error('Chaves ou URLs ausentes nas variáveis de ambiente.');
      }

      const response = await fetch(`${apiUrl}?token=${apiToken}`);

      if (!response.ok) {
        throw new Error(
          `Erro na requisição: ${response.status} - ${response.statusText}`
        );
      }

      const data: ClimaData = await response.json();

      if (
        !data ||
        !data.sun ||
        !data.temperature ||
        !data.humidity ||
        !data.rain
      ) {
        throw new Error('Resposta inválida da API');
      }

      setClimaData(data);
    } catch (error) {
      console.error('Erro ao obter dados meteorológicos:', error);
      setError('Erro ao obter dados meteorológicos');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClimaData();
  }, [fetchClimaData]);

  return { climaData, loading, error };
};

export default useClima;
