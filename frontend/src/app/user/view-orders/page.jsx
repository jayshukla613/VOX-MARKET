'use client';

import Footeruserpage from '@/components/Footeruserpage';
import Ordercard from '@/components/Ordercard';
import Sidebaruser from '@/components/Sidebaruser';
import React from 'react';

const ViewOrder = () => {
  
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-8 mt-4 rounded-lg shadow-lg">
        <div className="flex mt-8">
          {/* Sidebar */}
          <Sidebaruser />

          <div className="max-w-7xl mx-auto p-4">
            {/* Orders Section */}
            

            {/* Footer */}
            <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
              <Footeruserpage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
