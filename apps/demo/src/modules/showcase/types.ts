import React from 'react';

export interface ShowcaseItem {
  title: string;
  description?: string;
  component: React.ComponentType;
}
export interface ShowcaseCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}
