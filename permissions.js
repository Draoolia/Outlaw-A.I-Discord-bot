function isModOrAdmin(member) {
  return member.permissions.has('Administrator') || member.permissions.has('ManageGuild') || member.permissions.has('ManageRoles');
}
module.exports = { isModOrAdmin };