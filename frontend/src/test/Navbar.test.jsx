import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';

describe('Navbar Component', () => {
  it('renders brand title and tagline', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText(/BeyondPahar/i)).toBeInTheDocument();
    expect(screen.getByText(/Beyond the hills\. Into the wild/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getAllByRole('link', { name: /Purulia/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /Bankura/i }).length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: /Experiences/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Stays/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Packages/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Journal/i })).toBeInTheDocument();
  });

  it('renders Plan My Trip button', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: /Plan My Trip/i })).toBeInTheDocument();
  });
});
