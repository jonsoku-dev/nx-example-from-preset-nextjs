import { NextPage } from 'next/types';
import React from 'react';
import { PageTitle } from '@nx-example/ui-header';

const SamplePage: NextPage = () => {
  return (
    <div>
      <PageTitle />
    </div>
  );
};

export default React.memo(SamplePage);
