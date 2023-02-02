// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const email = req.body.email;
  // Then save email to your database, etc...
  res.status(200).json({ name: 'John Doe' })
}
