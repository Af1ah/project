/*
  # Initial Schema Setup for WebFlowMaster

  1. Tables
    - clients
      - Basic client information and authentication
    - orders
      - Order tracking and management
    - packages
      - Service package details
    - website_requirements
      - Client website specifications
    - project_updates
      - Development progress updates

  2. Security
    - RLS policies for all tables
    - Authentication integration
*/

-- Create clients table
CREATE TABLE IF NOT EXISTS clients (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  company_name text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create packages table
CREATE TABLE IF NOT EXISTS packages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price decimal NOT NULL,
  description text NOT NULL,
  features jsonb NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create orders table
CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid REFERENCES clients(id),
  package_id uuid REFERENCES packages(id),
  status text NOT NULL DEFAULT 'pending',
  payment_status text NOT NULL DEFAULT 'pending',
  razorpay_order_id text,
  total_amount decimal NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create website_requirements table
CREATE TABLE IF NOT EXISTS website_requirements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  design_preferences jsonb,
  color_scheme jsonb,
  features jsonb,
  target_audience text,
  existing_assets jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create project_updates table
CREATE TABLE IF NOT EXISTS project_updates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  status text NOT NULL,
  description text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_requirements ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_updates ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Clients can view their own data"
  ON clients FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Anyone can view packages"
  ON packages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Clients can view their own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (client_id IN (
    SELECT id FROM clients WHERE user_id = auth.uid()
  ));

CREATE POLICY "Clients can view their own website requirements"
  ON website_requirements FOR SELECT
  TO authenticated
  USING (order_id IN (
    SELECT id FROM orders WHERE client_id IN (
      SELECT id FROM clients WHERE user_id = auth.uid()
    )
  ));

CREATE POLICY "Clients can view their project updates"
  ON project_updates FOR SELECT
  TO authenticated
  USING (order_id IN (
    SELECT id FROM orders WHERE client_id IN (
      SELECT id FROM clients WHERE user_id = auth.uid()
    )
  ));