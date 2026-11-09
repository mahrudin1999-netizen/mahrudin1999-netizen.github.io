export async function onRequest(context) {
  try {
    const result = await context.env.DB
      .prepare("SELECT COUNT(*) AS total FROM users")
      .first();

    return Response.json({
      app: "GIRINATAN",
      status: "active",
      account_api: "ready",
      total_accounts: result.total
    });

  } catch (error) {
    return Response.json({
      app: "GIRINATAN",
      status: "error",
      message: "Database tidak dapat diakses"
    }, { status: 500 });
  }
}
