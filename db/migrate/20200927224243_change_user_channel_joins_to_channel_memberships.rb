class ChangeUserChannelJoinsToChannelMemberships < ActiveRecord::Migration[5.2]
  def change
    rename_table :user_channel_joins, :channel_memberships
  end
end
