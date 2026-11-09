export async function onRequest(context) {
  try {
    await context.env.DB.prepare("SELECT 1").first();

    return Response.json({
      app: "GIRINATAN API",
      status: "active",
      database: "connected"
    });
  } catch (error) {
    return Response.json({
      app: "GIRINATAN API",
      status: "error",
      database: "disconnected"
    }, { status: 500 });
  }
}
