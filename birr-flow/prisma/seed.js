"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient({
    log: ['info', 'warn', 'error'],
});
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var donorEthiopia, donorGates, donorEU, donorSafaricom, startupSoleRebels, startupKacha, startupHelloSolar, startupZayRide, startupLersha, startupDeliverAddis, investorRENEW, investorVillage, investorCepheus, regulatorNBE, grantOfficer, challengeCleanEnergy, challengeFintech, challengeAgriTech, proposalSolar, proposalKacha, proposalLersha, grantKacha, grantSoleRebels, grantZayRide, grantDeliverAddis, milestoneKacha1, milestoneKacha2, milestoneSole1, milestoneSole2, milestoneZay1, milestoneZay2, milestoneDeliver1, milestoneDeliver2, proofHire, proofBeta, proofRides;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Clean existing data (optional)
                return [4 /*yield*/, prisma.feedbackToStartup.deleteMany()];
                case 1:
                    // Clean existing data (optional)
                    _a.sent();
                    return [4 /*yield*/, prisma.grantOfficerAction.deleteMany()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.regulatorAuditLog.deleteMany()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.accountabilityPassport.deleteMany()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma.tranche.deleteMany()];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, prisma.proof.deleteMany()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, prisma.milestone.deleteMany()];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, prisma.grant.deleteMany()];
                case 8:
                    _a.sent();
                    return [4 /*yield*/, prisma.proposal.deleteMany()];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, prisma.challengeParameter.deleteMany()];
                case 10:
                    _a.sent();
                    return [4 /*yield*/, prisma.challenge.deleteMany()];
                case 11:
                    _a.sent();
                    return [4 /*yield*/, prisma.startupProfile.deleteMany()];
                case 12:
                    _a.sent();
                    return [4 /*yield*/, prisma.investorProfile.deleteMany()];
                case 13:
                    _a.sent();
                    return [4 /*yield*/, prisma.donorProfile.deleteMany()];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, prisma.user.deleteMany()
                        // ========== 1. USERS ==========
                        // Donors (local, international, corporate)
                    ];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'donor@moi.gov.et',
                                fullName: 'Ministry of Innovation - Ethiopia',
                                role: 'donor',
                                organization: 'Ministry of Innovation and Technology',
                                verified: true,
                            },
                        })];
                case 16:
                    donorEthiopia = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'grants@gatesfoundation.org',
                                fullName: 'Bill & Melinda Gates Foundation',
                                role: 'donor',
                                organization: 'Gates Foundation',
                                verified: true,
                            },
                        })];
                case 17:
                    donorGates = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'funding@europa.eu',
                                fullName: 'European Union - Delegation to Ethiopia',
                                role: 'donor',
                                organization: 'EU',
                                verified: true,
                            },
                        })];
                case 18:
                    donorEU = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'csr@safaricom.et',
                                fullName: 'Safaricom Ethiopia',
                                role: 'donor',
                                organization: 'Safaricom Telecommunications Ethiopia',
                                verified: true,
                            }
                        })
                        // Startups (Ethiopian small enterprises)
                    ];
                case 19:
                    donorSafaricom = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'hello@sole-rebels.com',
                                fullName: 'Sole Rebels',
                                role: 'startup',
                                organization: 'Sole Rebels Eco-Fashion',
                                verified: true,
                            },
                        })];
                case 20:
                    startupSoleRebels = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'founders@kacha.et',
                                fullName: 'Kacha Digital',
                                role: 'startup',
                                organization: 'Kacha Payment Solutions',
                                verified: true,
                            },
                        })];
                case 21:
                    startupKacha = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'team@hellosolar.et',
                                fullName: 'Hello Solar',
                                role: 'startup',
                                organization: 'Hello Solar Ethiopia',
                                verified: true,
                            },
                        })];
                case 22:
                    startupHelloSolar = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'info@zayride.com',
                                fullName: 'ZayRide',
                                role: 'startup',
                                organization: 'ZayRide Transport',
                                verified: true,
                            },
                        })];
                case 23:
                    startupZayRide = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'agri@lersha.et',
                                fullName: 'Lersha Agritech',
                                role: 'startup',
                                organization: 'Lersha Digital Agriculture',
                                verified: true,
                            }
                        })];
                case 24:
                    startupLersha = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'hello@deliveraddis.com',
                                fullName: 'Deliver Addis',
                                role: 'startup',
                                organization: 'Deliver Addis Logistics',
                                verified: true,
                            }
                        })
                        // Investors (finance-led)
                    ];
                case 25:
                    startupDeliverAddis = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'invest@renew.et',
                                fullName: 'RENEW VC',
                                role: 'investor',
                                organization: 'RENEW Ventures',
                                verified: true,
                            },
                        })];
                case 26:
                    investorRENEW = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'partners@villagecapital.com',
                                fullName: 'Village Capital',
                                role: 'investor',
                                organization: 'Village Capital',
                                verified: true,
                            },
                        })];
                case 27:
                    investorVillage = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'funds@cepheus.com',
                                fullName: 'Cepheus Growth Capital',
                                role: 'investor',
                                organization: 'Cepheus Growth',
                                verified: true,
                            }
                        })
                        // Regulator (NBE)
                    ];
                case 28:
                    investorCepheus = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'audit@nbe.gov.et',
                                fullName: 'National Bank of Ethiopia',
                                role: 'regulator',
                                organization: 'NBE',
                                verified: true,
                            },
                        })
                        // Grant Officer
                    ];
                case 29:
                    regulatorNBE = _a.sent();
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: 'officer@moi.gov.et',
                                fullName: 'Tigist Alemu',
                                role: 'grant_officer',
                                organization: 'Ministry of Innovation',
                                verified: true,
                            },
                        })
                        // ========== 2. PROFILES ==========
                    ];
                case 30:
                    grantOfficer = _a.sent();
                    // ========== 2. PROFILES ==========
                    return [4 /*yield*/, prisma.donorProfile.create({
                            data: {
                                userId: donorEthiopia.id,
                                donorType: 'grant',
                                preferredSectors: ['Clean Energy', 'Fintech', 'Agriculture'],
                            },
                        })];
                case 31:
                    // ========== 2. PROFILES ==========
                    _a.sent();
                    return [4 /*yield*/, prisma.donorProfile.create({
                            data: {
                                userId: donorGates.id,
                                donorType: 'grant',
                                preferredSectors: ['Health', 'Agriculture', 'Digital Inclusion'],
                            },
                        })];
                case 32:
                    _a.sent();
                    return [4 /*yield*/, prisma.donorProfile.create({
                            data: {
                                userId: donorEU.id,
                                donorType: 'impact_fund',
                                preferredSectors: ['Green Economy', 'Digital Transformation'],
                            },
                        })];
                case 33:
                    _a.sent();
                    return [4 /*yield*/, prisma.donorProfile.create({
                            data: {
                                userId: donorSafaricom.id,
                                donorType: 'corporate',
                                preferredSectors: ['Digital Inclusion', 'Fintech', 'AgriTech'],
                            }
                        })];
                case 34:
                    _a.sent();
                    return [4 /*yield*/, prisma.startupProfile.createMany({
                            data: [
                                {
                                    userId: startupSoleRebels.id,
                                    startupName: 'Sole Rebels',
                                    registrationNumber: 'REG/2020/1234',
                                    sector: 'Eco-Fashion',
                                    accountabilityScore: 92.5,
                                    passportHash: 'hash_sole_001',
                                },
                                {
                                    userId: startupKacha.id,
                                    startupName: 'Kacha',
                                    registrationNumber: 'REG/2021/4567',
                                    sector: 'Fintech',
                                    accountabilityScore: 88.0,
                                    passportHash: 'hash_kacha_002',
                                },
                                {
                                    userId: startupHelloSolar.id,
                                    startupName: 'Hello Solar',
                                    registrationNumber: 'REG/2022/7890',
                                    sector: 'Clean Energy',
                                    accountabilityScore: 95.0,
                                    passportHash: 'hash_solar_003',
                                },
                                {
                                    userId: startupZayRide.id,
                                    startupName: 'ZayRide',
                                    registrationNumber: 'REG/2023/1122',
                                    sector: 'Transport',
                                    accountabilityScore: 78.5,
                                    passportHash: 'hash_zay_004',
                                },
                                {
                                    userId: startupLersha.id,
                                    startupName: 'Lersha',
                                    registrationNumber: 'REG/2023/5555',
                                    sector: 'AgriTech',
                                    accountabilityScore: 91.0,
                                    passportHash: 'hash_lersha_005',
                                },
                                {
                                    userId: startupDeliverAddis.id,
                                    startupName: 'Deliver Addis',
                                    registrationNumber: 'REG/2019/3333',
                                    sector: 'Logistics',
                                    accountabilityScore: 89.5,
                                    passportHash: 'hash_deliver_006',
                                }
                            ],
                        })];
                case 35:
                    _a.sent();
                    return [4 /*yield*/, prisma.investorProfile.createMany({
                            data: [
                                {
                                    userId: investorRENEW.id,
                                    investmentFocus: 'equity',
                                    typicalTrancheSize: 500000, // ETB
                                },
                                {
                                    userId: investorVillage.id,
                                    investmentFocus: 'revenue-share',
                                    typicalTrancheSize: 250000,
                                },
                                {
                                    userId: investorCepheus.id,
                                    investmentFocus: 'equity',
                                    typicalTrancheSize: 1000000,
                                }
                            ],
                        })
                        // ========== 3. CHALLENGES ==========
                    ];
                case 36:
                    _a.sent();
                    return [4 /*yield*/, prisma.challenge.create({
                            data: {
                                donorId: donorEU.id,
                                title: 'Clean Energy MVP for Off-Grid Communities',
                                sector: 'Clean Energy',
                                problemStatement: 'We need affordable solar home systems for rural Ethiopia.',
                                submissionDeadline: new Date('2026-07-15T23:59:59Z'),
                                reviewPeriodStart: new Date('2026-07-20T00:00:00Z'),
                                announcementDate: new Date('2026-08-01T12:00:00Z'),
                                status: 'open',
                                isPublic: true,
                            },
                        })];
                case 37:
                    challengeCleanEnergy = _a.sent();
                    return [4 /*yield*/, prisma.challenge.create({
                            data: {
                                donorId: donorEthiopia.id,
                                title: 'Fintech for Micro-Merchants',
                                sector: 'Fintech',
                                problemStatement: 'Build a simple digital ledger and payment tool for informal traders.',
                                submissionDeadline: new Date('2026-06-30T23:59:59Z'),
                                reviewPeriodStart: new Date('2026-07-05T00:00:00Z'),
                                announcementDate: new Date('2026-07-20T12:00:00Z'),
                                status: 'open',
                                isPublic: true,
                            },
                        })];
                case 38:
                    challengeFintech = _a.sent();
                    return [4 /*yield*/, prisma.challenge.create({
                            data: {
                                donorId: donorSafaricom.id,
                                title: 'Digital Solutions for Smallholder Farmers',
                                sector: 'AgriTech',
                                problemStatement: 'Provide access to weather, market data, and mechanization services via USSD and Mobile App.',
                                submissionDeadline: new Date('2026-08-10T23:59:59Z'),
                                reviewPeriodStart: new Date('2026-08-15T00:00:00Z'),
                                announcementDate: new Date('2026-09-01T12:00:00Z'),
                                status: 'open',
                                isPublic: true,
                            }
                        })
                        // Challenge parameters
                    ];
                case 39:
                    challengeAgriTech = _a.sent();
                    // Challenge parameters
                    return [4 /*yield*/, prisma.challengeParameter.createMany({
                            data: [
                                {
                                    challengeId: challengeCleanEnergy.id,
                                    paramName: 'Max budget (ETB)',
                                    paramType: 'number',
                                    required: true,
                                },
                                {
                                    challengeId: challengeCleanEnergy.id,
                                    paramName: 'Team size',
                                    paramType: 'number',
                                    required: true,
                                },
                                {
                                    challengeId: challengeCleanEnergy.id,
                                    paramName: 'Prototype video link',
                                    paramType: 'text',
                                    required: true,
                                },
                                {
                                    challengeId: challengeFintech.id,
                                    paramName: 'Pilot merchant count',
                                    paramType: 'number',
                                    required: true,
                                },
                                {
                                    challengeId: challengeAgriTech.id,
                                    paramName: 'USSD Shortcode Plan',
                                    paramType: 'text',
                                    required: true,
                                }
                            ],
                        })
                        // ========== 4. PROPOSALS ==========
                    ];
                case 40:
                    // Challenge parameters
                    _a.sent();
                    return [4 /*yield*/, prisma.proposal.create({
                            data: {
                                challengeId: challengeCleanEnergy.id,
                                startupId: startupHelloSolar.id,
                                ideaDescription: 'SolarPay – a pay-as-you-go solar home system with mobile money integration.',
                                budgetBreakdown: { development: 250000, marketing: 100000, operations: 150000 },
                                milestonePlan: [
                                    { title: 'Complete prototype design', dueDate: '2026-08-15' },
                                    { title: 'Install 100 pilot units', dueDate: '2026-10-01' },
                                    { title: 'Integrate Telebirr payments', dueDate: '2026-11-01' },
                                ],
                                pitchDeckUrl: 'https://drive.google.com/solar_deck.pdf',
                                videoUrl: 'https://youtu.be/demo_solar',
                                status: 'submitted',
                                donorScore: null,
                                donorFeedback: null,
                                submittedAt: new Date('2026-06-01T10:00:00Z'),
                            },
                        })];
                case 41:
                    proposalSolar = _a.sent();
                    return [4 /*yield*/, prisma.proposal.create({
                            data: {
                                challengeId: challengeFintech.id,
                                startupId: startupKacha.id,
                                ideaDescription: 'Kacha Merchant – offline-capable digital ledger for market vendors.',
                                budgetBreakdown: { development: 300000, user_training: 80000 },
                                milestonePlan: [
                                    { title: 'Build beta app', dueDate: '2026-07-20' },
                                    { title: 'Onboard 500 merchants', dueDate: '2026-08-30' },
                                ],
                                pitchDeckUrl: 'https://drive.google.com/kacha_deck.pdf',
                                status: 'winner', // already selected
                                donorScore: 95,
                                donorFeedback: 'Excellent local understanding and scalability.',
                                submittedAt: new Date('2026-06-05T14:30:00Z'),
                            },
                        })];
                case 42:
                    proposalKacha = _a.sent();
                    return [4 /*yield*/, prisma.proposal.create({
                            data: {
                                challengeId: challengeAgriTech.id,
                                startupId: startupLersha.id,
                                ideaDescription: 'One-stop digital platform for rural farmers integrating climate advisories, farm inputs, and tractor hiring.',
                                budgetBreakdown: { technology: 150000, field_agents: 250000, marketing: 100000 },
                                milestonePlan: [
                                    { title: 'Launch USSD Interface', dueDate: '2026-09-15' },
                                    { title: 'Train 50 Lersha Agents', dueDate: '2026-10-20' },
                                    { title: 'Serve 5,000 Farmers', dueDate: '2026-12-01' }
                                ],
                                pitchDeckUrl: 'https://drive.google.com/lersha_deck.pdf',
                                status: 'shortlisted',
                                donorScore: 88,
                                submittedAt: new Date('2026-07-02T08:00:00Z'),
                            }
                        })
                        // ========== 5. GRANTS (from proposals) ==========
                    ];
                case 43:
                    proposalLersha = _a.sent();
                    return [4 /*yield*/, prisma.grant.create({
                            data: {
                                proposalId: proposalKacha.id,
                                donorId: donorEthiopia.id,
                                investorId: null, // donor-led
                                startupId: startupKacha.id,
                                totalAmount: 500000,
                                equityPercent: null,
                                revenueShareTerms: null,
                                status: 'active',
                                createdAt: new Date('2026-07-21T09:00:00Z'),
                            },
                        })
                        // Also a direct grant (not from challenge) – donor-led
                    ];
                case 44:
                    grantKacha = _a.sent();
                    return [4 /*yield*/, prisma.grant.create({
                            data: {
                                proposalId: null,
                                donorId: donorGates.id,
                                investorId: null,
                                startupId: startupSoleRebels.id,
                                totalAmount: 750000,
                                equityPercent: null,
                                revenueShareTerms: null,
                                status: 'active',
                                createdAt: new Date('2026-05-01T00:00:00Z'),
                            },
                        })
                        // Investor-led grant (finance-led)
                    ];
                case 45:
                    grantSoleRebels = _a.sent();
                    return [4 /*yield*/, prisma.grant.create({
                            data: {
                                proposalId: null,
                                donorId: null,
                                investorId: investorRENEW.id,
                                startupId: startupZayRide.id,
                                totalAmount: 1200000,
                                equityPercent: 15.0,
                                revenueShareTerms: '15% of net profit until 2x return',
                                status: 'active',
                                createdAt: new Date('2026-04-15T00:00:00Z'),
                            },
                        })
                        // Mixed Grant (Donor + Investor matching - Cepheus)
                    ];
                case 46:
                    grantZayRide = _a.sent();
                    return [4 /*yield*/, prisma.grant.create({
                            data: {
                                proposalId: null,
                                donorId: donorEU.id,
                                investorId: investorCepheus.id,
                                startupId: startupDeliverAddis.id,
                                totalAmount: 2000000,
                                equityPercent: 10.0,
                                revenueShareTerms: '10% of revenue for 3 years',
                                status: 'completed',
                                createdAt: new Date('2025-01-10T00:00:00Z'),
                            }
                        })
                        // ========== 6. MILESTONES ==========
                        // For grantKacha (Fintech)
                    ];
                case 47:
                    grantDeliverAddis = _a.sent();
                    return [4 /*yield*/, prisma.milestone.create({
                            data: {
                                grantId: grantKacha.id,
                                title: 'Build beta app',
                                dueDate: new Date('2026-07-20'),
                                orderIndex: 1,
                                requiredProofType: 'link',
                                tranchePercent: 40.0,
                            },
                        })];
                case 48:
                    milestoneKacha1 = _a.sent();
                    return [4 /*yield*/, prisma.milestone.create({
                            data: {
                                grantId: grantKacha.id,
                                title: 'Onboard 500 merchants',
                                dueDate: new Date('2026-08-30'),
                                orderIndex: 2,
                                requiredProofType: 'photo',
                                tranchePercent: 60.0,
                            },
                        })
                        // For grantSoleRebels (Eco-Fashion)
                    ];
                case 49:
                    milestoneKacha2 = _a.sent();
                    return [4 /*yield*/, prisma.milestone.create({
                            data: {
                                grantId: grantSoleRebels.id,
                                title: 'Hire 3 artisans',
                                dueDate: new Date('2026-06-15'),
                                orderIndex: 1,
                                requiredProofType: 'pdf',
                                tranchePercent: 25.0,
                            },
                        })];
                case 50:
                    milestoneSole1 = _a.sent();
                    return [4 /*yield*/, prisma.milestone.create({
                            data: {
                                grantId: grantSoleRebels.id,
                                title: 'Launch new recycled footwear line',
                                dueDate: new Date('2026-08-01'),
                                orderIndex: 2,
                                requiredProofType: 'photo',
                                tranchePercent: 75.0,
                            },
                        })
                        // For grantZayRide (Transport, investor-led)
                    ];
                case 51:
                    milestoneSole2 = _a.sent();
                    return [4 /*yield*/, prisma.milestone.create({
                            data: {
                                grantId: grantZayRide.id,
                                title: 'Reach 10,000 daily rides',
                                dueDate: new Date('2026-06-30'),
                                orderIndex: 1,
                                requiredProofType: 'photo',
                                tranchePercent: 30.0,
                            },
                        })];
                case 52:
                    milestoneZay1 = _a.sent();
                    return [4 /*yield*/, prisma.milestone.create({
                            data: {
                                grantId: grantZayRide.id,
                                title: 'Expand to 3 new cities',
                                dueDate: new Date('2026-09-15'),
                                orderIndex: 2,
                                requiredProofType: 'pdf',
                                tranchePercent: 70.0,
                            },
                        })
                        // For grantDeliverAddis (Completed)
                    ];
                case 53:
                    milestoneZay2 = _a.sent();
                    return [4 /*yield*/, prisma.milestone.create({
                            data: {
                                grantId: grantDeliverAddis.id,
                                title: 'Setup central warehouse',
                                dueDate: new Date('2025-05-01'),
                                orderIndex: 1,
                                requiredProofType: 'photo',
                                tranchePercent: 50.0,
                            }
                        })];
                case 54:
                    milestoneDeliver1 = _a.sent();
                    return [4 /*yield*/, prisma.milestone.create({
                            data: {
                                grantId: grantDeliverAddis.id,
                                title: 'Launch EV delivery fleet',
                                dueDate: new Date('2025-11-01'),
                                orderIndex: 2,
                                requiredProofType: 'receipt',
                                tranchePercent: 50.0,
                            }
                        })
                        // ========== 7. PROOFS ==========
                        // Approved proof for milestoneSole1
                    ];
                case 55:
                    milestoneDeliver2 = _a.sent();
                    return [4 /*yield*/, prisma.proof.create({
                            data: {
                                milestoneId: milestoneSole1.id,
                                uploadedById: startupSoleRebels.id,
                                fileData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
                                fileHash: 'sha256-aaabbbccc123',
                                status: 'approved',
                                reviewedById: donorGates.id,
                                reviewedAt: new Date('2026-06-20T11:00:00Z'),
                                comment: 'Employment contracts verified.',
                                submittedAt: new Date('2026-06-18T09:30:00Z'),
                            },
                        })
                        // Pending proof for milestoneKacha1
                    ];
                case 56:
                    proofHire = _a.sent();
                    return [4 /*yield*/, prisma.proof.create({
                            data: {
                                milestoneId: milestoneKacha1.id,
                                uploadedById: startupKacha.id,
                                fileData: 'https://testflight.apple.com/join/kacha_beta',
                                fileHash: 'sha256-link-456',
                                status: 'pending',
                                reviewedById: null,
                                reviewedAt: null,
                                comment: null,
                                submittedAt: new Date('2026-07-19T16:00:00Z'),
                            },
                        })
                        // Suspicious proof (fraud flag) for milestoneZay1
                    ];
                case 57:
                    proofBeta = _a.sent();
                    return [4 /*yield*/, prisma.proof.create({
                            data: {
                                milestoneId: milestoneZay1.id,
                                uploadedById: startupZayRide.id,
                                fileData: 'data:image/jpeg;base64,...',
                                fileHash: 'sha256-fake123',
                                status: 'suspicious',
                                reviewedById: investorRENEW.id,
                                reviewedAt: new Date('2026-07-05T14:20:00Z'),
                                comment: 'Screenshots appear edited. Requesting audit.',
                                submittedAt: new Date('2026-07-01T10:00:00Z'),
                            },
                        })
                        // Approved Proofs for DeliverAddis
                    ];
                case 58:
                    proofRides = _a.sent();
                    // Approved Proofs for DeliverAddis
                    return [4 /*yield*/, prisma.proof.create({
                            data: {
                                milestoneId: milestoneDeliver1.id,
                                uploadedById: startupDeliverAddis.id,
                                fileData: 'data:image/jpeg;base64,warehouse_pic',
                                fileHash: 'sha256-warehouse-999',
                                status: 'approved',
                                reviewedById: investorCepheus.id,
                                reviewedAt: new Date('2025-05-10T11:00:00Z'),
                                comment: 'Warehouse physical inspection passed.',
                                submittedAt: new Date('2025-05-02T10:00:00Z'),
                            }
                        })];
                case 59:
                    // Approved Proofs for DeliverAddis
                    _a.sent();
                    return [4 /*yield*/, prisma.proof.create({
                            data: {
                                milestoneId: milestoneDeliver2.id,
                                uploadedById: startupDeliverAddis.id,
                                fileData: 'data:application/pdf;base64,invoice_evs',
                                fileHash: 'sha256-ev-888',
                                status: 'approved',
                                reviewedById: donorEU.id,
                                reviewedAt: new Date('2025-11-15T09:00:00Z'),
                                comment: 'Receipts for 20 electric bikes confirmed.',
                                submittedAt: new Date('2025-11-05T14:00:00Z'),
                            }
                        })
                        // ========== 8. TRANCHES ==========
                    ];
                case 60:
                    _a.sent();
                    // ========== 8. TRANCHES ==========
                    return [4 /*yield*/, prisma.tranche.create({
                            data: {
                                grantId: grantZayRide.id,
                                milestoneId: milestoneZay1.id,
                                amountReleased: 360000, // 30% of 1.2M
                                releasedAt: new Date('2026-05-10T00:00:00Z'), // released before proof became suspicious
                            },
                        })];
                case 61:
                    // ========== 8. TRANCHES ==========
                    _a.sent();
                    return [4 /*yield*/, prisma.tranche.create({
                            data: {
                                grantId: grantDeliverAddis.id,
                                milestoneId: milestoneDeliver1.id,
                                amountReleased: 1000000,
                                releasedAt: new Date('2025-05-12T00:00:00Z')
                            }
                        })];
                case 62:
                    _a.sent();
                    return [4 /*yield*/, prisma.tranche.create({
                            data: {
                                grantId: grantDeliverAddis.id,
                                milestoneId: milestoneDeliver2.id,
                                amountReleased: 1000000,
                                releasedAt: new Date('2025-11-20T00:00:00Z')
                            }
                        })
                        // ========== 9. ACCOUNTABILITY PASSPORTS ==========
                    ];
                case 63:
                    _a.sent();
                    // ========== 9. ACCOUNTABILITY PASSPORTS ==========
                    return [4 /*yield*/, prisma.accountabilityPassport.create({
                            data: {
                                startupId: startupSoleRebels.id,
                                generatedAt: new Date('2026-07-01T12:00:00Z'),
                                pdfUrl: 'https://birrflow.et/passports/sole_rebels.pdf',
                                verificationHash: 'vrf-sole-001',
                                milestonesSummary: [
                                    { grant: 'Gates Foundation', milestone: 'Hire 3 artisans', status: 'approved' },
                                    { grant: 'Gates Foundation', milestone: 'Launch new footwear line', status: 'pending' },
                                ],
                            },
                        })];
                case 64:
                    // ========== 9. ACCOUNTABILITY PASSPORTS ==========
                    _a.sent();
                    return [4 /*yield*/, prisma.accountabilityPassport.create({
                            data: {
                                startupId: startupDeliverAddis.id,
                                generatedAt: new Date('2026-01-05T12:00:00Z'),
                                pdfUrl: 'https://birrflow.et/passports/deliver_addis.pdf',
                                verificationHash: 'vrf-deliver-006',
                                milestonesSummary: [
                                    { grant: 'Cepheus & EU', milestone: 'Setup central warehouse', status: 'approved' },
                                    { grant: 'Cepheus & EU', milestone: 'Launch EV delivery fleet', status: 'approved' },
                                ]
                            }
                        })
                        // ========== 10. REGULATOR AUDIT LOGS ==========
                    ];
                case 65:
                    _a.sent();
                    // ========== 10. REGULATOR AUDIT LOGS ==========
                    return [4 /*yield*/, prisma.regulatorAuditLog.create({
                            data: {
                                regulatorId: regulatorNBE.id,
                                exportedAt: new Date('2026-07-10T09:00:00Z'),
                                exportedDataHash: 'sha256-audit-q1-2026',
                                queryParams: { sector: 'all', dateFrom: '2026-01-01', dateTo: '2026-06-30' },
                                anonymized: true,
                            },
                        })
                        // ========== 11. GRANT OFFICER ACTIONS ==========
                    ];
                case 66:
                    // ========== 10. REGULATOR AUDIT LOGS ==========
                    _a.sent();
                    // ========== 11. GRANT OFFICER ACTIONS ==========
                    return [4 /*yield*/, prisma.grantOfficerAction.create({
                            data: {
                                officerId: grantOfficer.id,
                                proofId: proofRides.id,
                                action: 'mark_suspicious',
                                notes: 'Flagged for manual review. Proof appears doctored.',
                                createdAt: new Date('2026-07-05T15:00:00Z'),
                            },
                        })
                        // ========== 12. FEEDBACK TO LOSING STARTUPS ==========
                    ];
                case 67:
                    // ========== 11. GRANT OFFICER ACTIONS ==========
                    _a.sent();
                    // ========== 12. FEEDBACK TO LOSING STARTUPS ==========
                    return [4 /*yield*/, prisma.feedbackToStartup.create({
                            data: {
                                proposalId: proposalSolar.id,
                                fromUserId: donorEU.id,
                                feedbackText: 'Your prototype was strong, but the budget was too high for phase 1. We encourage resubmission in next round.',
                                isAnonymized: true,
                                sentAt: new Date('2026-08-02T10:00:00Z'),
                            },
                        })];
                case 68:
                    // ========== 12. FEEDBACK TO LOSING STARTUPS ==========
                    _a.sent();
                    console.log('🌱 Seed completed: Ethiopian startups, international donors, grants, proofs, and compliance data inserted.');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
