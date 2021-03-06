import MemberModel from 'models/member';
import handlePgError from 'controllers/errors';

const membersModel = new MemberModel('members');

export const listMembers = async (req, res) => {
  try {
    const data = await membersModel.listAllMembers();
    res.status(200).json({ data: data.rows });
  } catch (err) {
    res.status(500).json({ error: err.stack });
  }
};

export const addMember = async (req, res) => {
  const { name, email, telegramHandle } = req.body;
  try {
    const data = await membersModel.createMember(name, email, telegramHandle);
    res.status(201).json({ data: data.rows[0] });
  } catch (err) {
    handlePgError(err, res, membersModel.table);
  }
};

export const removeMember = async (req, res) => {
  const memberId = req.params.id;
  try {
    // TODO: warn if member ID does not exist
    await membersModel.deleteMember(memberId);
    res.status(200).json({
      message: `Member with id ${memberId} has been deleted.`,
    });
  } catch (err) {
    handlePgError(err, res, membersModel.table);
  }
};
