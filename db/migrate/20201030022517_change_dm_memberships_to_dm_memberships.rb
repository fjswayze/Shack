class ChangeDmMembershipsToDmMemberships < ActiveRecord::Migration[5.2]
  def change
    rename_table :DM_memberships, :dm_memberships
  end
end
