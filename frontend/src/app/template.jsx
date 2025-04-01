'use client';
import Navbar from '@/components/Navbar';
import { AppProvider } from '@/context/AppContext';
import { VoiceProvider } from '@/context/VoiceContext';
import { DropdownMenu } from '@heroui/dropdown';
import React from 'react'

const Template = ({ children }) => {
  return (
    <VoiceProvider>
      <AppProvider>
        <Navbar>
          <DropdownMenu />
        </Navbar>
        {children}
      </AppProvider>
    </VoiceProvider>
  )
}

export default Template