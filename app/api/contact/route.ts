import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, subject, message, topicId, } = body;

  // Construct the payload for the helpdesk JSON API
  const payload = {
    name: "ShuleSmart Website Contact Form",
    email: process.env.HELPDESK_EMAIL || "shulesmart@edpartnersafrica.com",
    subject: subject,
    message: message,
    topicId: parseInt(topicId, 10) || 1,
  };

  console.log("Sending ticket to helpdesk API:", {
    endpoint: "https://helpdesk.edpartnersafrica.com/api/tickets.json",
    payload: payload
  });

  try {
    const response = await fetch(
      "https://helpdesk.edpartnersafrica.com/api/tickets.json",
      {
        method: "POST",
        headers: {
          "X-API-Key": process.env.HELPDESK_API_KEY || "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const responseText = await response.text();
    console.log("Response status:", response.status);
    console.log("Response body:", responseText);

    if (response.ok) {
      // Try to parse as JSON
      let data;
      try {
        data = JSON.parse(responseText);
      } catch {
        data = { raw: responseText };
      }
      
      console.log("Ticket created successfully:", data);
      return NextResponse.json({ 
        success: true, 
        message: "Ticket created successfully",
        ticketId: data.id || data.ticket_id || null
      });
    } else {
      console.error("Helpdesk API error:", responseText);
      return NextResponse.json(
        { 
          error: "Failed to create ticket", 
          details: responseText,
          status: response.status
        },
        { status: response.status }
      );
    }
  } catch (error: unknown) {
    console.error("An error occurred:", error);
    
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    return NextResponse.json(
      { error: "An internal server error occurred", details: errorMessage },
      { status: 500 }
    );
  }
}