import React, { useState } from 'react';

// Handle input change
export const searchUsers_OnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log("input changed");
};

// Handle form submit
export const searchUsers_OnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') {
    console.log('Enter was pressed -> begin searching');
  }
}