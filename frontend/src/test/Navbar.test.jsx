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

  it('toggles mobile menu and displays menu items on mobile toggle', async () => {
    const { fireEvent } = await import('@testing-library/react');
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    // Initial state: hamburger button is present with 'Open Menu' aria-label
    const toggleButton = screen.getByRole('button', { name: /Open Menu/i });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Drawer items shouldn't be open yet (e.g. search Purulia & Bankura inside mobile drawer)
    expect(screen.queryByText(/Search Purulia & Bankura.../i)).not.toBeInTheDocument();

    // Click hamburger button to open mobile menu
    fireEvent.click(toggleButton);

    // Button should now show 'Close Menu'
    expect(screen.getByRole('button', { name: /Close Menu/i })).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Mobile drawer should be visible with quick search and navigation items
    expect(screen.getByText(/Search Purulia & Bankura.../i)).toBeInTheDocument();

    // Clicking a mobile nav item closes the menu
    const experiencesLink = screen.getAllByRole('link', { name: /Experiences/i })[0];
    fireEvent.click(experiencesLink);

    expect(screen.queryByText(/Search Purulia & Bankura.../i)).not.toBeInTheDocument();
  });
});
