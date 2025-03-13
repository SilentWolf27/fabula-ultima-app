-- Add deleted_at column to campaigns table
ALTER TABLE campaigns ADD COLUMN deleted_at TIMESTAMP WITH TIME ZONE DEFAULT NULL;

-- Add index for faster soft delete queries
CREATE INDEX idx_campaigns_deleted_at ON campaigns(deleted_at);
