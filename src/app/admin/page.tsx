import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import AdminPanelClient from './AdminPanelClient';
import { prisma } from '../../lib/prisma';
import { redirect } from 'next/navigation';

export default async function AdminUploads() {
  // Hent sessionen for at kontrollere brugerens rolle
  const session = await getServerSession(authOptions);

  // Hvis brugeren ikke er logget ind, eller ikke er admin, omdiriger til forsiden eller login
  if (!session || session.user.role !== 'admin') {
    return redirect('/auth/login'); // Omdiriger til login-siden, hvis de ikke er admin
  }

  // Hent uploads med status "pending" fra databasen
  const uploads = await prisma.upload.findMany({
    where: { status: 'pending' },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div>
      <h1>Admin Panel - Pending Uploads</h1>
      <AdminPanelClient uploads={uploads} />
    </div>
  );
}
