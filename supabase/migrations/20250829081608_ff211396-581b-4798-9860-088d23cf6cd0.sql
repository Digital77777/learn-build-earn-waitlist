-- Add missing columns to waiting_list table
ALTER TABLE public.waiting_list 
ADD COLUMN name TEXT NOT NULL DEFAULT '',
ADD COLUMN cellphone TEXT;

-- Update the default value constraint to allow empty strings for existing records
ALTER TABLE public.waiting_list 
ALTER COLUMN name DROP DEFAULT;