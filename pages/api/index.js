// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(
    req,
    res
) {
  try {
    const { organize } = req.query;
    const data = require(`../../public/${organize}.json`);
    res.status(200).json({
      code: 200,
      data,
    });
  } catch (error) {
    const data = require(`../../public/${'default'}.json`);
    res.status(200).json({
      code: 200,
      data,
    });
  }
}
