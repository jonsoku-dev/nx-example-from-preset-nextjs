import React, { useEffect, useState } from 'react';
import { PageTitle } from '@nx-example/ui-header';
import { ApiResponse, API_URL } from '@nx-example/api-interface';

interface SamplePageProps {
  children?: React.ReactNode;
}

const SamplePage: React.FC<SamplePageProps> = () => {
  const [apiResponse, setApiResponse] = useState<ApiResponse>({
    message: 'Loading ...',
  });

  useEffect(() => {
    fetch(API_URL)
      .then((r) => r.json())
      .then(setApiResponse);
  }, []);

  return (
    <div>
      <PageTitle />
      <p>{apiResponse.message}</p>
    </div>
  );
};

export default SamplePage;
