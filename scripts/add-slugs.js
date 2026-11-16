const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '..', 'lib', 'projects-data.ts');
let content = fs.readFileSync(targetPath, 'utf8');

const slugs = {
  1: 'daily-mom-journey',
  2: 'melearni-lms',
  3: 'atl-best-vending',
  4: 'daily-mom-craft-activities',
  5: 'hz-dynamics-fashion-store',
  6: 'modern-ecommerce-store',
  7: 'sustainable-footwear-concept',
  8: 'nurse-ai-hub',
  9: 'codewire-solutions',
  10: 'ebay-template-electronics',
  11: 'ebay-template-fashion',
  12: 'ebay-template-home-garden',
  13: 'ebay-template-automotive',
  14: 'ebay-template-sports',
  15: 'ebay-template-beauty',
  16: 'ebay-template-toys-games',
  17: 'ebay-template-books-media',
  18: 'ebay-template-jewelry',
  19: 'ebay-template-industrial',
  20: 'ebay-template-pet-supplies',
  21: 'ebay-template-collectibles',
  22: 'ebay-template-kitchen',
  23: 'heroic-home-comfort',
  24: 'coolbuffs-job-portal',
  25: 'seyma-robb-interior-design',
  26: 'luxury-interior-design-landing',
  27: 'ecommerce-order-automation',
  28: 'marketing-lead-automation',
  29: 'social-media-management-automation',
  30: 'customer-support-ticket-system',
  31: 'invoice-payment-automation',
  32: 'ecommerce-shopping-assistant',
  33: 'customer-support-ai-bot',
  34: 'lead-qualification-chatbot',
  35: 'healthcare-appointment-bot',
  36: 'real-estate-property-advisor',
  37: 'restaurant-ordering-reservation-bot'
};

content = content.replace(
  'export type Project = {\n  id: number',
  'export type Project = {\n  id: number\n  slug: string'
);

for (const [id, slug] of Object.entries(slugs)) {
  const target = `id: ${id},`;
  content = content.replace(target, `${target}\n    slug: "${slug}",`);
}

const helpers = `
// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return defaultProjects.find((p) => p.slug === slug)
}

// Get all project slugs
export function getAllProjectSlugs(): string[] {
  return defaultProjects.map((p) => p.slug)
}
`;

content += helpers;

fs.writeFileSync(targetPath, content, 'utf8');
console.log('Successfully updated lib/projects-data.ts with slugs and helpers!');
