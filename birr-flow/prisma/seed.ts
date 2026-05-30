import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['info', 'warn', 'error'],
})

async function main() {
  // Clean existing data (optional)
  await prisma.feedbackToStartup.deleteMany()
  await prisma.grantOfficerAction.deleteMany()
  await prisma.regulatorAuditLog.deleteMany()
  await prisma.accountabilityPassport.deleteMany()
  await prisma.tranche.deleteMany()
  await prisma.proof.deleteMany()
  await prisma.milestone.deleteMany()
  await prisma.grant.deleteMany()
  await prisma.proposal.deleteMany()
  await prisma.challengeParameter.deleteMany()
  await prisma.challenge.deleteMany()
  await prisma.startupProfile.deleteMany()
  await prisma.investorProfile.deleteMany()
  await prisma.donorProfile.deleteMany()
  await prisma.user.deleteMany()

  // ========== 1. USERS ==========
  // Donors
  const donorEthiopia = await prisma.user.create({ data: { email: 'donor@moi.gov.et', fullName: 'Ministry of Innovation - Ethiopia', role: 'donor', organization: 'Ministry of Innovation and Technology', verified: true } })
  const donorGates = await prisma.user.create({ data: { email: 'grants@gatesfoundation.org', fullName: 'Bill & Melinda Gates Foundation', role: 'donor', organization: 'Gates Foundation', verified: true } })
  const donorEU = await prisma.user.create({ data: { email: 'funding@europa.eu', fullName: 'European Union - Delegation to Ethiopia', role: 'donor', organization: 'EU', verified: true } })
  const donorSafaricom = await prisma.user.create({ data: { email: 'csr@safaricom.et', fullName: 'Safaricom Ethiopia', role: 'donor', organization: 'Safaricom', verified: true } })
  const donorMastercard = await prisma.user.create({ data: { email: 'grants@mastercardfdn.org', fullName: 'Mastercard Foundation', role: 'donor', organization: 'Mastercard Foundation', verified: true } })
  const donorUSAID = await prisma.user.create({ data: { email: 'ethiopia@usaid.gov', fullName: 'USAID Ethiopia', role: 'donor', organization: 'USAID', verified: true } })

  // Startups
  const startupSoleRebels = await prisma.user.create({ data: { email: 'hello@sole-rebels.com', fullName: 'Sole Rebels', role: 'startup', organization: 'Sole Rebels Eco-Fashion', verified: true } })
  const startupKacha = await prisma.user.create({ data: { email: 'founders@kacha.et', fullName: 'Kacha Digital', role: 'startup', organization: 'Kacha Payment Solutions', verified: true } })
  const startupHelloSolar = await prisma.user.create({ data: { email: 'team@hellosolar.et', fullName: 'Hello Solar', role: 'startup', organization: 'Hello Solar Ethiopia', verified: true } })
  const startupZayRide = await prisma.user.create({ data: { email: 'info@zayride.com', fullName: 'ZayRide', role: 'startup', organization: 'ZayRide Transport', verified: true } })
  const startupLersha = await prisma.user.create({ data: { email: 'agri@lersha.et', fullName: 'Lersha Agritech', role: 'startup', organization: 'Lersha Digital Agriculture', verified: true } })
  const startupDeliverAddis = await prisma.user.create({ data: { email: 'hello@deliveraddis.com', fullName: 'Deliver Addis', role: 'startup', organization: 'Deliver Addis Logistics', verified: true } })
  const startupKubik = await prisma.user.create({ data: { email: 'info@kubik.et', fullName: 'Kubik', role: 'startup', organization: 'Kubik Plastic Recycling', verified: true } })

  // Investors
  const investorRENEW = await prisma.user.create({ data: { email: 'invest@renew.et', fullName: 'RENEW VC', role: 'investor', organization: 'RENEW Ventures', verified: true } })
  const investorVillage = await prisma.user.create({ data: { email: 'partners@villagecapital.com', fullName: 'Village Capital', role: 'investor', organization: 'Village Capital', verified: true } })
  const investorCepheus = await prisma.user.create({ data: { email: 'funds@cepheus.com', fullName: 'Cepheus Growth Capital', role: 'investor', organization: 'Cepheus Growth', verified: true } })
  const investorZoscales = await prisma.user.create({ data: { email: 'contact@zoscales.com', fullName: 'Zoscales Partners', role: 'investor', organization: 'Zoscales', verified: true } })
  const investorBGI = await prisma.user.create({ data: { email: 'investments@bgi.et', fullName: 'BGI Ethiopia Ventures', role: 'investor', organization: 'BGI Ethiopia', verified: true } })
  const investorBlueMoon = await prisma.user.create({ data: { email: 'info@bluemoonethiopia.com', fullName: 'blueMoon', role: 'investor', organization: 'blueMoon Agribusiness Incubator', verified: true } })

  // Regulator (NBE)
  const regulatorNBE = await prisma.user.create({ data: { email: 'audit@nbe.gov.et', fullName: 'National Bank of Ethiopia', role: 'regulator', organization: 'NBE', verified: true } })
  
  // Grant Officers
  const grantOfficer1 = await prisma.user.create({ data: { email: 'officer1@moi.gov.et', fullName: 'Tigist Alemu', role: 'grant_officer', organization: 'Ministry of Innovation', verified: true } })
  const grantOfficer2 = await prisma.user.create({ data: { email: 'officer2@moi.gov.et', fullName: 'Dawit Bekele', role: 'grant_officer', organization: 'Ministry of Innovation', verified: true } })

  // ========== 2. PROFILES ==========
  // Donor Profiles (6)
  await prisma.donorProfile.createMany({
    data: [
      { userId: donorEthiopia.id, donorType: 'grant', preferredSectors: ['Clean Energy', 'Fintech', 'Agriculture'] },
      { userId: donorGates.id, donorType: 'grant', preferredSectors: ['Health', 'Agriculture', 'Digital Inclusion'] },
      { userId: donorEU.id, donorType: 'impact_fund', preferredSectors: ['Green Economy', 'Digital Transformation'] },
      { userId: donorSafaricom.id, donorType: 'corporate', preferredSectors: ['Digital Inclusion', 'Fintech', 'AgriTech'] },
      { userId: donorMastercard.id, donorType: 'grant', preferredSectors: ['Education', 'Youth Employment', 'Digital Economy'] },
      { userId: donorUSAID.id, donorType: 'grant', preferredSectors: ['Health', 'Agriculture', 'Economic Growth'] },
    ]
  })

  // Startup Profiles (7)
  await prisma.startupProfile.createMany({
    data: [
      { userId: startupSoleRebels.id, startupName: 'Sole Rebels', registrationNumber: 'REG/2020/1234', sector: 'Eco-Fashion', accountabilityScore: 92.5, passportHash: 'hash_sole_001' },
      { userId: startupKacha.id, startupName: 'Kacha', registrationNumber: 'REG/2021/4567', sector: 'Fintech', accountabilityScore: 88.0, passportHash: 'hash_kacha_002' },
      { userId: startupHelloSolar.id, startupName: 'Hello Solar', registrationNumber: 'REG/2022/7890', sector: 'Clean Energy', accountabilityScore: 95.0, passportHash: 'hash_solar_003' },
      { userId: startupZayRide.id, startupName: 'ZayRide', registrationNumber: 'REG/2023/1122', sector: 'Transport', accountabilityScore: 78.5, passportHash: 'hash_zay_004' },
      { userId: startupLersha.id, startupName: 'Lersha', registrationNumber: 'REG/2023/5555', sector: 'AgriTech', accountabilityScore: 91.0, passportHash: 'hash_lersha_005' },
      { userId: startupDeliverAddis.id, startupName: 'Deliver Addis', registrationNumber: 'REG/2019/3333', sector: 'Logistics', accountabilityScore: 89.5, passportHash: 'hash_deliver_006' },
      { userId: startupKubik.id, startupName: 'Kubik', registrationNumber: 'REG/2023/4444', sector: 'PropTech', accountabilityScore: 94.0, passportHash: 'hash_kubik_007' }
    ],
  })

  // Investor Profiles (6)
  await prisma.investorProfile.createMany({
    data: [
      { userId: investorRENEW.id, investmentFocus: 'equity', typicalTrancheSize: 500000 },
      { userId: investorVillage.id, investmentFocus: 'revenue-share', typicalTrancheSize: 250000 },
      { userId: investorCepheus.id, investmentFocus: 'equity', typicalTrancheSize: 1000000 },
      { userId: investorZoscales.id, investmentFocus: 'equity', typicalTrancheSize: 2000000 },
      { userId: investorBGI.id, investmentFocus: 'revenue-share', typicalTrancheSize: 1500000 },
      { userId: investorBlueMoon.id, investmentFocus: 'convertible-note', typicalTrancheSize: 100000 },
    ],
  })

  // ========== 3. CHALLENGES ==========
  // Challenges (6)
  const challenge1 = await prisma.challenge.create({ data: { donorId: donorEU.id, title: 'Clean Energy MVP for Off-Grid', sector: 'Clean Energy', problemStatement: 'We need affordable solar home systems.', submissionDeadline: new Date('2026-07-15T23:59:59Z'), reviewPeriodStart: new Date('2026-07-20T00:00:00Z'), announcementDate: new Date('2026-08-01T12:00:00Z'), status: 'open', isPublic: true } })
  const challenge2 = await prisma.challenge.create({ data: { donorId: donorEthiopia.id, title: 'Fintech for Micro-Merchants', sector: 'Fintech', problemStatement: 'Build a simple digital ledger.', submissionDeadline: new Date('2026-06-30T23:59:59Z'), reviewPeriodStart: new Date('2026-07-05T00:00:00Z'), announcementDate: new Date('2026-07-20T12:00:00Z'), status: 'open', isPublic: true } })
  const challenge3 = await prisma.challenge.create({ data: { donorId: donorSafaricom.id, title: 'Digital Solutions for Farmers', sector: 'AgriTech', problemStatement: 'Provide access to market data via USSD.', submissionDeadline: new Date('2026-08-10T23:59:59Z'), reviewPeriodStart: new Date('2026-08-15T00:00:00Z'), announcementDate: new Date('2026-09-01T12:00:00Z'), status: 'open', isPublic: true } })
  const challenge4 = await prisma.challenge.create({ data: { donorId: donorMastercard.id, title: 'Youth Digital Skills', sector: 'EdTech', problemStatement: 'Platform for youth to learn digital skills.', submissionDeadline: new Date('2026-09-01T23:59:59Z'), reviewPeriodStart: new Date('2026-09-05T00:00:00Z'), announcementDate: new Date('2026-09-20T12:00:00Z'), status: 'open', isPublic: true } })
  const challenge5 = await prisma.challenge.create({ data: { donorId: donorUSAID.id, title: 'Plastic Waste Recycling', sector: 'Green Economy', problemStatement: 'Recycle plastic waste into building materials.', submissionDeadline: new Date('2026-10-01T23:59:59Z'), reviewPeriodStart: new Date('2026-10-05T00:00:00Z'), announcementDate: new Date('2026-10-20T12:00:00Z'), status: 'draft', isPublic: false } })
  const challenge6 = await prisma.challenge.create({ data: { donorId: donorGates.id, title: 'Maternal Health Information', sector: 'HealthTech', problemStatement: 'Deliver health info to rural mothers.', submissionDeadline: new Date('2025-12-01T23:59:59Z'), reviewPeriodStart: new Date('2025-12-05T00:00:00Z'), announcementDate: new Date('2025-12-20T12:00:00Z'), status: 'completed', isPublic: true } })

  // Challenge parameters (6+)
  await prisma.challengeParameter.createMany({
    data: [
      { challengeId: challenge1.id, paramName: 'Max budget (ETB)', paramType: 'number', required: true },
      { challengeId: challenge1.id, paramName: 'Team size', paramType: 'number', required: true },
      { challengeId: challenge2.id, paramName: 'Pilot merchant count', paramType: 'number', required: true },
      { challengeId: challenge3.id, paramName: 'USSD Shortcode Plan', paramType: 'text', required: true },
      { challengeId: challenge4.id, paramName: 'Curriculum PDF', paramType: 'file', required: true },
      { challengeId: challenge5.id, paramName: 'Tons Recycled per Month', paramType: 'number', required: true },
      { challengeId: challenge6.id, paramName: 'Registered Users', paramType: 'number', required: true },
    ],
  })

  // ========== 4. PROPOSALS ==========
  // Proposals (6)
  const proposal1 = await prisma.proposal.create({ data: { challengeId: challenge1.id, startupId: startupHelloSolar.id, ideaDescription: 'SolarPay', budgetBreakdown: { dev: 250000, mkt: 100000 }, milestonePlan: [{ title: 'Design', dueDate: '2026-08-15' }], status: 'rejected', donorScore: 60, donorFeedback: 'Budget too high', submittedAt: new Date('2026-06-01T10:00:00Z') } })
  const proposal2 = await prisma.proposal.create({ data: { challengeId: challenge2.id, startupId: startupKacha.id, ideaDescription: 'Kacha Merchant', budgetBreakdown: { dev: 300000 }, milestonePlan: [{ title: 'Beta', dueDate: '2026-07-20' }], status: 'winner', donorScore: 95, donorFeedback: 'Excellent.', submittedAt: new Date('2026-06-05T14:30:00Z') } })
  const proposal3 = await prisma.proposal.create({ data: { challengeId: challenge3.id, startupId: startupLersha.id, ideaDescription: 'Lersha platform', budgetBreakdown: { tech: 150000 }, milestonePlan: [{ title: 'USSD', dueDate: '2026-09-15' }], status: 'shortlisted', donorScore: 88, submittedAt: new Date('2026-07-02T08:00:00Z') } })
  const proposal4 = await prisma.proposal.create({ data: { challengeId: challenge5.id, startupId: startupKubik.id, ideaDescription: 'Kubik Bricks from plastic', budgetBreakdown: { machines: 500000 }, milestonePlan: [{ title: 'Setup Factory', dueDate: '2026-11-01' }], status: 'submitted', submittedAt: new Date('2026-09-10T10:00:00Z') } })
  const proposal5 = await prisma.proposal.create({ data: { challengeId: challenge1.id, startupId: startupSoleRebels.id, ideaDescription: 'Solar Powered Factory', budgetBreakdown: { solar_panels: 400000 }, milestonePlan: [{ title: 'Installation', dueDate: '2026-08-10' }], status: 'submitted', submittedAt: new Date('2026-06-10T12:00:00Z') } })
  const proposal6 = await prisma.proposal.create({ data: { challengeId: challenge2.id, startupId: startupZayRide.id, ideaDescription: 'ZayRide Wallet', budgetBreakdown: { dev: 200000 }, milestonePlan: [{ title: 'Wallet Launch', dueDate: '2026-07-25' }], status: 'rejected', donorScore: 75, donorFeedback: 'Focus on core transport', submittedAt: new Date('2026-06-15T09:00:00Z') } })

  // ========== 5. GRANTS ==========
  // Grants (6)
  const grant1 = await prisma.grant.create({ data: { proposalId: proposal2.id, donorId: donorEthiopia.id, investorId: null, startupId: startupKacha.id, totalAmount: 500000, status: 'active', createdAt: new Date('2026-07-21T09:00:00Z') } })
  const grant2 = await prisma.grant.create({ data: { proposalId: null, donorId: donorGates.id, investorId: null, startupId: startupSoleRebels.id, totalAmount: 750000, status: 'active', createdAt: new Date('2026-05-01T00:00:00Z') } })
  const grant3 = await prisma.grant.create({ data: { proposalId: null, donorId: null, investorId: investorRENEW.id, startupId: startupZayRide.id, totalAmount: 1200000, equityPercent: 15.0, revenueShareTerms: '15% net', status: 'active', createdAt: new Date('2026-04-15T00:00:00Z') } })
  const grant4 = await prisma.grant.create({ data: { proposalId: null, donorId: donorEU.id, investorId: investorCepheus.id, startupId: startupDeliverAddis.id, totalAmount: 2000000, equityPercent: 10.0, status: 'completed', createdAt: new Date('2025-01-10T00:00:00Z') } })
  const grant5 = await prisma.grant.create({ data: { proposalId: null, donorId: donorUSAID.id, investorId: null, startupId: startupKubik.id, totalAmount: 1500000, status: 'active', createdAt: new Date('2026-01-15T10:00:00Z') } })
  const grant6 = await prisma.grant.create({ data: { proposalId: null, donorId: donorMastercard.id, investorId: investorBlueMoon.id, startupId: startupLersha.id, totalAmount: 800000, equityPercent: 5.0, status: 'defaulted', createdAt: new Date('2025-06-20T08:00:00Z') } })

  // ========== 6. MILESTONES ==========
  // Milestones (12)
  const ms1 = await prisma.milestone.create({ data: { grantId: grant1.id, title: 'Build beta app', dueDate: new Date('2026-07-20'), orderIndex: 1, requiredProofType: 'link', tranchePercent: 40.0 } })
  const ms2 = await prisma.milestone.create({ data: { grantId: grant1.id, title: 'Onboard 500 merchants', dueDate: new Date('2026-08-30'), orderIndex: 2, requiredProofType: 'photo', tranchePercent: 60.0 } })
  
  const ms3 = await prisma.milestone.create({ data: { grantId: grant2.id, title: 'Hire 3 artisans', dueDate: new Date('2026-06-15'), orderIndex: 1, requiredProofType: 'pdf', tranchePercent: 25.0 } })
  const ms4 = await prisma.milestone.create({ data: { grantId: grant2.id, title: 'Launch new recycled footwear line', dueDate: new Date('2026-08-01'), orderIndex: 2, requiredProofType: 'photo', tranchePercent: 75.0 } })

  const ms5 = await prisma.milestone.create({ data: { grantId: grant3.id, title: 'Reach 10,000 daily rides', dueDate: new Date('2026-06-30'), orderIndex: 1, requiredProofType: 'photo', tranchePercent: 30.0 } })
  const ms6 = await prisma.milestone.create({ data: { grantId: grant3.id, title: 'Expand to 3 new cities', dueDate: new Date('2026-09-15'), orderIndex: 2, requiredProofType: 'pdf', tranchePercent: 70.0 } })

  const ms7 = await prisma.milestone.create({ data: { grantId: grant4.id, title: 'Setup central warehouse', dueDate: new Date('2025-05-01'), orderIndex: 1, requiredProofType: 'photo', tranchePercent: 50.0 } })
  const ms8 = await prisma.milestone.create({ data: { grantId: grant4.id, title: 'Launch EV delivery fleet', dueDate: new Date('2025-11-01'), orderIndex: 2, requiredProofType: 'receipt', tranchePercent: 50.0 } })

  const ms9 = await prisma.milestone.create({ data: { grantId: grant5.id, title: 'Acquire Plastic Molder', dueDate: new Date('2026-02-15'), orderIndex: 1, requiredProofType: 'receipt', tranchePercent: 50.0 } })
  const ms10 = await prisma.milestone.create({ data: { grantId: grant5.id, title: 'Produce 10k Bricks', dueDate: new Date('2026-06-15'), orderIndex: 2, requiredProofType: 'photo', tranchePercent: 50.0 } })

  const ms11 = await prisma.milestone.create({ data: { grantId: grant6.id, title: 'Train 50 Agents', dueDate: new Date('2025-08-01'), orderIndex: 1, requiredProofType: 'pdf', tranchePercent: 40.0 } })
  const ms12 = await prisma.milestone.create({ data: { grantId: grant6.id, title: 'Deploy Tractors', dueDate: new Date('2025-12-01'), orderIndex: 2, requiredProofType: 'photo', tranchePercent: 60.0 } })

  // ========== 7. PROOFS ==========
  // Proofs (8)
  const prf1 = await prisma.proof.create({ data: { milestoneId: ms3.id, uploadedById: startupSoleRebels.id, fileData: 'base64_data_here', status: 'approved', reviewedById: donorGates.id, comment: 'Contracts verified.' } })
  const prf2 = await prisma.proof.create({ data: { milestoneId: ms1.id, uploadedById: startupKacha.id, fileData: 'https://testflight...', status: 'pending' } })
  const prf3 = await prisma.proof.create({ data: { milestoneId: ms5.id, uploadedById: startupZayRide.id, fileData: 'base64_data_suspicious', status: 'suspicious', reviewedById: investorRENEW.id, comment: 'Doctored screenshots.' } })
  const prf4 = await prisma.proof.create({ data: { milestoneId: ms7.id, uploadedById: startupDeliverAddis.id, fileData: 'base64_pic', status: 'approved', reviewedById: investorCepheus.id } })
  const prf5 = await prisma.proof.create({ data: { milestoneId: ms8.id, uploadedById: startupDeliverAddis.id, fileData: 'base64_receipt', status: 'approved', reviewedById: donorEU.id } })
  const prf6 = await prisma.proof.create({ data: { milestoneId: ms9.id, uploadedById: startupKubik.id, fileData: 'base64_invoice', status: 'approved', reviewedById: donorUSAID.id } })
  const prf7 = await prisma.proof.create({ data: { milestoneId: ms11.id, uploadedById: startupLersha.id, fileData: 'base64_train', status: 'rejected', reviewedById: donorMastercard.id, comment: 'Signatures missing on attendance sheet.' } })
  const prf8 = await prisma.proof.create({ data: { milestoneId: ms4.id, uploadedById: startupSoleRebels.id, fileData: 'base64_launch', status: 'pending' } })

  // ========== 8. TRANCHES ==========
  // Tranches (6)
  await prisma.tranche.create({ data: { grantId: grant3.id, milestoneId: ms5.id, amountReleased: 360000, releasedAt: new Date('2026-05-10T00:00:00Z') } })
  await prisma.tranche.create({ data: { grantId: grant4.id, milestoneId: ms7.id, amountReleased: 1000000, releasedAt: new Date('2025-05-12T00:00:00Z') } })
  await prisma.tranche.create({ data: { grantId: grant4.id, milestoneId: ms8.id, amountReleased: 1000000, releasedAt: new Date('2025-11-20T00:00:00Z') } })
  await prisma.tranche.create({ data: { grantId: grant2.id, milestoneId: ms3.id, amountReleased: 187500, releasedAt: new Date('2026-06-25T00:00:00Z') } })
  await prisma.tranche.create({ data: { grantId: grant5.id, milestoneId: ms9.id, amountReleased: 750000, releasedAt: new Date('2026-02-20T00:00:00Z') } })
  await prisma.tranche.create({ data: { grantId: grant1.id, milestoneId: ms1.id, amountReleased: 200000, releasedAt: new Date('2026-08-01T00:00:00Z') } }) // Advanced before proof for beta? Or just manual release.

  // ========== 9. ACCOUNTABILITY PASSPORTS ==========
  // Passports (6)
  await prisma.accountabilityPassport.createMany({
    data: [
      { startupId: startupSoleRebels.id, generatedAt: new Date('2026-07-01T12:00:00Z'), pdfUrl: 'url_sole', milestonesSummary: [] },
      { startupId: startupDeliverAddis.id, generatedAt: new Date('2026-01-05T12:00:00Z'), pdfUrl: 'url_deliver', milestonesSummary: [] },
      { startupId: startupKacha.id, generatedAt: new Date('2026-08-01T12:00:00Z'), pdfUrl: 'url_kacha', milestonesSummary: [] },
      { startupId: startupKubik.id, generatedAt: new Date('2026-03-01T12:00:00Z'), pdfUrl: 'url_kubik', milestonesSummary: [] },
      { startupId: startupZayRide.id, generatedAt: new Date('2026-06-01T12:00:00Z'), pdfUrl: 'url_zay', milestonesSummary: [] },
      { startupId: startupLersha.id, generatedAt: new Date('2025-09-01T12:00:00Z'), pdfUrl: 'url_lersha', milestonesSummary: [] },
    ]
  })

  // ========== 10. REGULATOR AUDIT LOGS ==========
  // Regulator Logs (6)
  await prisma.regulatorAuditLog.createMany({
    data: [
      { regulatorId: regulatorNBE.id, exportedAt: new Date('2026-07-10T09:00:00Z'), exportedDataHash: 'hash1', queryParams: { sector: 'all' }, anonymized: true },
      { regulatorId: regulatorNBE.id, exportedAt: new Date('2026-08-10T09:00:00Z'), exportedDataHash: 'hash2', queryParams: { sector: 'Fintech' }, anonymized: true },
      { regulatorId: regulatorNBE.id, exportedAt: new Date('2026-09-10T09:00:00Z'), exportedDataHash: 'hash3', queryParams: { startup: 'Kacha' }, anonymized: false },
      { regulatorId: regulatorNBE.id, exportedAt: new Date('2026-10-10T09:00:00Z'), exportedDataHash: 'hash4', queryParams: { donor: 'USAID' }, anonymized: true },
      { regulatorId: regulatorNBE.id, exportedAt: new Date('2026-11-10T09:00:00Z'), exportedDataHash: 'hash5', queryParams: { sector: 'Clean Energy' }, anonymized: true },
      { regulatorId: regulatorNBE.id, exportedAt: new Date('2026-12-10T09:00:00Z'), exportedDataHash: 'hash6', queryParams: { status: 'suspicious' }, anonymized: true },
    ]
  })

  // ========== 11. GRANT OFFICER ACTIONS ==========
  // Officer Actions (6)
  await prisma.grantOfficerAction.createMany({
    data: [
      { officerId: grantOfficer1.id, proofId: prf3.id, action: 'mark_suspicious', notes: 'Flagged for review.' },
      { officerId: grantOfficer2.id, proofId: prf1.id, action: 'clear', notes: 'All good.' },
      { officerId: grantOfficer1.id, proofId: prf4.id, action: 'clear', notes: 'Verified warehouse.' },
      { officerId: grantOfficer2.id, proofId: prf5.id, action: 'clear', notes: 'Receipt matches.' },
      { officerId: grantOfficer1.id, proofId: prf6.id, action: 'clear', notes: 'Invoice is valid.' },
      { officerId: grantOfficer2.id, proofId: prf7.id, action: 'escalate', notes: 'Need superior review for missing signatures.' },
    ]
  })

  // ========== 12. FEEDBACK TO LOSING STARTUPS ==========
  // Feedback (6)
  await prisma.feedbackToStartup.createMany({
    data: [
      { proposalId: proposal1.id, fromUserId: donorEU.id, feedbackText: 'Budget too high.', isAnonymized: true },
      { proposalId: proposal6.id, fromUserId: donorEthiopia.id, feedbackText: 'Focus more on transport.', isAnonymized: true },
      { proposalId: proposal3.id, fromUserId: donorSafaricom.id, feedbackText: 'Great idea, resubmit next round.', isAnonymized: false },
      { proposalId: proposal4.id, fromUserId: donorUSAID.id, feedbackText: 'Need more technical details on the machinery.', isAnonymized: true },
      { proposalId: proposal5.id, fromUserId: donorEU.id, feedbackText: 'Not aligned with off-grid challenge.', isAnonymized: true },
      { proposalId: proposal1.id, fromUserId: donorEU.id, feedbackText: 'Please review the unit economics.', isAnonymized: false },
    ]
  })

  console.log('🌱 Seed completed: At least 6 records for each table successfully inserted.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
