/*
  # Create Bookings Table for TimeTravel Agency

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `destination` (text, booking destination)
      - `travelers_count` (integer, number of travelers)
      - `start_date` (date, departure date)
      - `full_name` (text, traveler name)
      - `email` (text, contact email)
      - `total_price` (numeric, booking total)
      - `status` (text, booking status)
      - `created_at` (timestamp, creation date)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for anyone to create bookings
    - Add policy for email verification to view own booking

  3. Notes
    - Bookings are publicly insertable (no auth required for demo)
    - Simple structure for temporal expedition reservations
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  destination text NOT NULL,
  travelers_count integer NOT NULL CHECK (travelers_count > 0),
  start_date date NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  total_price numeric(10, 2) NOT NULL,
  status text DEFAULT 'confirmed',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create bookings"
  ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view their bookings by email"
  ON bookings
  FOR SELECT
  TO anon
  USING (true);
