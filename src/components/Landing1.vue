<script setup lang="ts">
import { onMounted } from 'vue';

// VisiOpt Smart Code for Landing page only
onMounted(() => {
  const script = document.createElement('script');
  script.async = true;
  script.type = 'text/javascript';
  script.innerHTML = `
    window.visiopt_code=window.visiopt_code||(function(){
      var visi_wid=1040,
          visi_flicker_time=4000,
          visi_flicker_element='html',
          c=false,
          d=document,
          visi_fn={
            begin:function(){
              var a=d.getElementById('visi_flicker');
              if(!a){
                var a=d.createElement('style'),
                    b=visi_flicker_element
                      ? visi_flicker_element+'{opacity:0!important;background:none!important;}'
                      : '',
                    h=d.getElementsByTagName('head')[0];
                a.setAttribute('id','visi_flicker');
                a.setAttribute('type','text/css');
                if(a.styleSheet){
                  a.styleSheet.cssText=b;
                } else {
                  a.appendChild(d.createTextNode(b));
                }
                h.appendChild(a);
              }
            },
            complete:function(){
              c=true;
              var a=d.getElementById('visi_flicker');
              if(a){a.parentNode.removeChild(a);}
            },
            completed:function(){return c;},
            pack:function(a){
              var b=d.createElement('script');
              b.src=a;
              b.type='text/javascript';
              b.onerror=function(){visi_fn.complete();};
              d.getElementsByTagName('head')[0].appendChild(b);
            },
            init:function(){
              visi_fn.begin();
              setTimeout(function(){visi_fn.complete()}, visi_flicker_time);
              this.pack('https://visioptdev.com/client/js_test/vt.'+visi_wid+'.js');
              return true;
            }
          };
      window.visiopt_code_status=visi_fn.init();
      return visi_fn;
    }());
  `;
  document.head.appendChild(script);
});
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.push('/')   // 👈 go to landing page
}
</script>

<template>
  <div class="landing-page">
    <button class="btn-back" @click="goBack">
        ← Back to Home
    </button>
    <!-- Testimonials Section -->
    <section class="testimonials">
      <h2>What Our Customers Say</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <p>"This platform has transformed how our team collaborates. We've reduced project delays by 40% and improved team satisfaction significantly."</p>
          <div class="testimonial-author">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop" alt="Avatar" />
            <div>
              <strong>Sarah Johnson</strong>
              <p>Project Manager, TechCorp</p>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <p>"The automation features alone have saved us hours every week. Customer support is excellent, and the platform is constantly improving."</p>
          <div class="testimonial-author">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop" alt="Avatar" />
            <div>
              <strong>Michael Chen</strong>
              <p>CEO, StartupXYZ</p>
            </div>
          </div>
        </div>
        <div class="testimonial-card">
          <div class="stars">⭐⭐⭐⭐⭐</div>
          <p>"Finally, a project management tool that scales with our growing team. Integration with our existing tools was seamless and painless."</p>
          <div class="testimonial-author">
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop" alt="Avatar" />
            <div>
              <strong>Emily Rodriguez</strong>
              <p>Operations Director, Global Enterprises</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="use-cases">
      <h2>Perfect For Every Industry</h2>
      <div class="use-cases-grid">
        <div class="use-case-card">
          <h3>Software Development</h3>
          <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=200&fit=crop" alt="Software development" />
          <p>Manage sprints, track bugs, and coordinate deployments with agile-friendly tools. Integrate with your CI/CD pipelines and version control systems.</p>
        </div>
        <div class="use-case-card">
          <h3>Marketing Teams</h3>
          <img src="https://images.unsplash.com/photo-1516321318423-f06f70d504d0?w=300&h=200&fit=crop" alt="Marketing" />
          <p>Plan campaigns, manage creative assets, and track campaign performance. Coordinate across teams and manage timelines effectively.</p>
        </div>
        <div class="use-case-card">
          <h3>Product Management</h3>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop\" alt="Product management" />
          <p>Prioritize features, manage roadmaps, and gather stakeholder feedback. Align product vision with execution and track progress.</p>
        </div>
        <div class="use-case-card">
          <h3>Design Teams</h3>
          <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop" alt="Design" />
          <p>Collaborate on designs, manage design systems, and streamline feedback. Version control for designs and organized asset management.</p>
        </div>
        <div class="use-case-card">
          <h3>Construction Projects</h3>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop" alt="Construction" />
          <p>Track timelines, manage budgets, and coordinate contractors. Mobile-friendly interface for on-site teams and real-time updates.</p>
        </div>
        <div class="use-case-card">
          <h3>Event Planning</h3>
          <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=200&fit=crop" alt="Events" />
          <p>Manage budgets, vendor coordination, and event timelines. Collaborate with multiple stakeholders and track deliverables.</p>
        </div>
      </div>
    </section>

    <!-- Integration Section -->
    <section class="integrations">
      <h2>Seamless Integrations With Tools You Love</h2>
      <p>Connect with your favorite tools and services. Our extensive integration library means you can build the perfect workflow for your team.</p>
      <div class="integrations-grid">
        <div class="integration-item">
          <div class="integration-icon">Slack</div>
        </div>
        <div class="integration-item">
          <div class="integration-icon">MS Teams</div>
        </div>
        <div class="integration-item">
          <div class="integration-icon">Jira</div>
        </div>
        <div class="integration-item">
          <div class="integration-icon">GitHub</div>
        </div>
        <div class="integration-item">
          <div class="integration-icon">Google Drive</div>
        </div>
        <div class="integration-item">
          <div class="integration-icon">Salesforce</div>
        </div>
        <div class="integration-item">
          <div class="integration-icon">Stripe</div>
        </div>
        <div class="integration-item">
          <div class="integration-icon">Zapier</div>
        </div>
      </div>
      <p class="integrations-note">+ 100+ more integrations available via our API</p>
    </section>

    <!-- Pricing Section -->
    <section class="pricing">
      <h2>Simple, Transparent Pricing</h2>
      <p>Choose the perfect plan for your team. All plans include a 30-day free trial.</p>
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>Starter</h3>
          <div class="price">$49<span>/month</span></div>
          <p class="pricing-description">Perfect for small teams</p>
          <ul class="pricing-features">
            <li>✓ Up to 5 team members</li>
            <li>✓ Unlimited projects</li>
            <li>✓ Basic analytics</li>
            <li>✓ 5 GB storage</li>
            <li>✓ Email support</li>
          </ul>
          <button class="pricing-button">Get Started</button>
        </div>
        <div class="pricing-card featured">
          <div class="badge">Popular</div>
          <h3>Professional</h3>
          <div class="price">$149<span>/month</span></div>
          <p class="pricing-description">For growing teams</p>
          <ul class="pricing-features">
            <li>✓ Up to 50 team members</li>
            <li>✓ Unlimited projects</li>
            <li>✓ Advanced analytics</li>
            <li>✓ 500 GB storage</li>
            <li>✓ Priority support</li>
            <li>✓ Custom integrations</li>
            <li>✓ Advanced security</li>
          </ul>
          <button class="pricing-button primary">Get Started</button>
        </div>
        <div class="pricing-card">
          <h3>Enterprise</h3>
          <div class="price">Custom</div>
          <p class="pricing-description">For large organizations</p>
          <ul class="pricing-features">
            <li>✓ Unlimited team members</li>
            <li>✓ Unlimited everything</li>
            <li>✓ Advanced analytics & AI</li>
            <li>✓ Unlimited storage</li>
            <li>✓ 24/7 phone support</li>
            <li>✓ Dedicated account manager</li>
            <li>✓ Custom SLA</li>
          </ul>
          <button class="pricing-button">Contact Sales</button>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
    
/* Testimonials Section */
.testimonials {
  padding: 100px 20px;
  background: #f7fafc;
  text-align: center;
}

.testimonials h2 {
  font-size: 2.5rem;
  margin-bottom: 60px;
  color: #1a202c;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.testimonial-card {
  background: white;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.stars {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.testimonial-card p:first-of-type {
  color: #4a5568;
  margin-bottom: 25px;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.testimonial-author img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.testimonial-author strong {
  display: block;
  color: #1a202c;
}

.testimonial-author p {
  font-size: 0.85rem;
  color: #718096;
}

/* Use Cases Section */
.use-cases {
  padding: 100px 20px;
}

.use-cases h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  color: #1a202c;
}

.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.use-case-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.use-case-card:hover {
  transform: translateY(-10px);
}

.use-case-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.use-case-card h3 {
  padding: 25px 20px 10px;
  font-size: 1.3rem;
  color: #1a202c;
}

.use-case-card p {
  padding: 0 20px 20px;
  color: #4a5568;
  font-size: 0.9rem;
}

/* Integrations Section */
.integrations {
  padding: 100px 20px;
  background: #f7fafc;
  text-align: center;
}

.integrations h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #1a202c;
}

.integrations > p {
  color: #4a5568;
  margin-bottom: 60px;
  font-size: 1.1rem;
}

.integrations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 25px;
  max-width: 1000px;
  margin: 0 auto 40px;
}

.integration-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #4a5568;
  transition: all 0.3s ease;
}

.integration-item:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-5px);
}

.integrations-note {
  color: #718096;
  font-size: 0.9rem;
}

/* Pricing Section */
.pricing {
  padding: 100px 20px;
}

.pricing h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 15px;
  color: #1a202c;
}

.pricing > p {
  text-align: center;
  color: #4a5568;
  margin-bottom: 60px;
  font-size: 1.1rem;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  background: white;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.pricing-card:hover {
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
}

.pricing-card.featured {
  border-color: #667eea;
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
}

.badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #667eea;
  color: white;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.pricing-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #1a202c;
}

.price {
  font-size: 2.5rem;
  font-weight: 800;
  color: #667eea;
  margin: 20px 0;
}

.price span {
  font-size: 1rem;
  color: #4a5568;
  font-weight: 400;
}

.pricing-description {
  color: #4a5568;
  margin-bottom: 30px;
  font-size: 0.9rem;
}

.pricing-features {
  list-style: none;
  text-align: left;
  margin: 30px 0;
  font-size: 0.95rem;
  color: #4a5568;
}

.pricing-features li {
  padding: 12px 0;
  border-bottom: 1px solid #e2e8f0;
}

.pricing-features li:last-child {
  border-bottom: none;
}

.pricing-button {
  width: 100%;
  padding: 14px 20px;
  margin-top: 30px;
  border: 2px solid #667eea;
  background: white;
  color: #667eea;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pricing-button:hover {
  background: #667eea;
  color: white;
}

.pricing-button.primary {
  background: #667eea;
  color: white;
}

.pricing-button.primary:hover {
  background: #5568d3;
}

</style>